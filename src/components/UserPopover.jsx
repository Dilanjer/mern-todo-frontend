import {
  DuplicateIcon,
  ExternalLinkIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'store/slices/UserSlice';
import Divider from '../UI/Divider';
import IconButton from '../UI/IconButton';
import List from '../UI/List';
import Popover from '../UI/Popover';
import Typography from '../UI/Typography';
import ListItemButton from 'UI/ListItemButton';
import { AnimatePresence } from 'framer-motion';
import { addNotification } from 'store/slices/NotificationSlice';
import Button from 'UI/Button';

const UserPopover = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const isOpen = Boolean(anchorEl);

  const onClick = (event) => setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);

  const userLogout = () => {
    onClose();
    dispatch(logout());
  };

  const handleDublicate = () => {
    dispatch(
      addNotification({
        type: 'success',
        message: 'Email address has copied to clipboard',
      })
    );

    navigator.clipboard.writeText(currentUser.email);
    onClose();
  };

  React.useEffect(() => {
    return () => {
      onClose();
    };
  }, []);

  return (
    <>
      <div
        className='flex items-center cursor-pointer select-none'
        title={`${currentUser.name} <${currentUser.email}>`}
        onClick={onClick}>
        <div className='mr-2 text-right hidden md:block'>
          <Typography className={'!my-0'} size={'sm'}>
            {currentUser.name}
          </Typography>
          <Typography className={'!my-0 dark:!text-gray-400/90'} size={'xs'}>
            {currentUser.email}
          </Typography>
        </div>
        <IconButton
          title={`${currentUser.name} <${currentUser.email}>`}
          border
          active={isOpen}>
          <UserIcon className='w-5' />
        </IconButton>
      </div>

      <AnimatePresence initial={false}>
        <Popover
          className={'w-auto md:w-72 '}
          isOpen={isOpen}
          key={isOpen}
          anchorEl={anchorEl}
          onClose={onClose}>
          <List disablePadding className={'py-4'}>
            <li className='px-4 text-left '>
              <Typography weight={'semibold'} size={'md'}>
                {currentUser.name}
              </Typography>
              <Typography
                truncate
                clipboard={
                  <IconButton
                    onClick={handleDublicate}
                    className={'ml-auto !min-w-0 !min-h-0'}>
                    <DuplicateIcon className='w-4' />
                  </IconButton>
                }
                className={'dark:text-gray-400 flex items-center'}
                size={'sm'}>
                <span className='truncate'>{currentUser.email}</span>
              </Typography>
            </li>
            <Divider className={'my-4'} />
            <ListItemButton
              badge={
                <ExternalLinkIcon className='w-4 ml-auto text-gray-800 dark:text-white' />
              }
              className={'px-4'}>
              Get help
            </ListItemButton>

            <ListItemButton
              badge={
                <ExternalLinkIcon className='w-4 ml-auto text-gray-800 dark:text-white' />
              }
              className={'px-4'}>
              GitHub
            </ListItemButton>

            <Divider className={'my-4'} />

            <li className='px-4'>
              <Button
                variant={'contained'}
                className={'text-sm py-2'}
                fullWidth
                onClick={userLogout}>
                Sign Out
              </Button>
            </li>
          </List>
        </Popover>
      </AnimatePresence>
    </>
  );
};

export default UserPopover;
