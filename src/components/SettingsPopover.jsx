import { CogIcon } from '@heroicons/react/outline';
import React from 'react';
import Divider from '../UI/Divider';
import List from '../UI/List';
import Popover from '../UI/Popover';
import ListItemButton from 'UI/ListItemButton';
import { AnimatePresence } from 'framer-motion';
import Button from 'UI/Button';
import { Link } from 'react-router-dom';
import ThemePopup from './ThemePopup';
import { useSelector } from 'react-redux';
import Typography from 'UI/Typography';

const SettingsPopover = () => {
  const [themePopup, setThemePopup] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentTheme } = useSelector((state) => state.theme);
  const open = Boolean(anchorEl);

  const onClick = (event) => setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);

  const heandleClickThemePopup = () => {
    setThemePopup(true);
    onClose();
  };

  const heandleCloseThemePopup = () => setThemePopup(false);

  React.useEffect(() => {
    return () => {
      onClose();
    };
  }, []);

  return (
    <>
      <Button title={'Open settings menu'} onClick={onClick} active={open}>
        <CogIcon className='w-5' />
        <span className='ml-2 hidden md:block'>Settings</span>
      </Button>

      <AnimatePresence initial={false}>
        <Popover
          className={'w-40 md:w-64'}
          isOpen={open}
          key={open}
          anchorEl={anchorEl}
          onClose={onClose}>
          <List disablePadding className={'py-2'}>
            <Link draggable={false} to={'/main/settings'}>
              <ListItemButton className={'px-4'}>Go to Settings</ListItemButton>
            </Link>

            <Divider className={'my-2'} />
            <ListItemButton
              onClick={heandleClickThemePopup}
              badge={
                <Typography size={'sm'} className={'ml-auto text-skin-primary'}>
                  {currentTheme}
                </Typography>
              }
              className={'px-4'}>
              Theme
            </ListItemButton>

            <ListItemButton className={'px-4'}>Coming soon..</ListItemButton>
          </List>
        </Popover>
      </AnimatePresence>

      <ThemePopup open={themePopup} onClose={heandleCloseThemePopup} />
    </>
  );
};

export default SettingsPopover;
