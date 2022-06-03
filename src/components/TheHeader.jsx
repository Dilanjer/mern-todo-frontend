import React from 'react';

import Typography from '../UI/Typography';
import UserPopover from './UserPopover';
import {
  ChevronDoubleUpIcon,
  ChipIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import Divider from 'UI/Divider';
import SettingsPopover from './SettingsPopover';
import Button from 'UI/Button';
import IconButton from 'UI/IconButton';
import { useSelector } from 'react-redux';

const TheHeader = () => {
  const { list } = useSelector((state) => state);
  return (
    <header className='sticky top-0 bg-skin-background-primary z-10 flex h-16 items-center bg-white px-4 py-3 '>
      <Typography
        as='h1'
        size={'lg'}
        weight={'semibold'}
        className={'items-center hidden md:flex'}>
        <ChipIcon className='mr-1 w-7' />
        Company name
      </Typography>
      <div>
        <IconButton className={'md:!hidden'}>
          <MenuIcon className='w-6' />
          <Typography
            size={'lg'}
            weight={'semibold'}
            className={'ml-2 w-24 text-left truncate'}>
            {list.currentList.title}
          </Typography>
        </IconButton>
      </div>

      <div
        className={'ml-auto flex h-full flex-shrink-0 items-center space-x-4'}>
        <Button variant={'outlined'} title={'Go to subscription plans'}>
          <ChevronDoubleUpIcon className='w-4' />
          <span className='ml-2 hidden md:block'>Upgrade</span>
        </Button>
        <SettingsPopover />
        <Divider orientation='vertical' />
        <UserPopover />
      </div>
    </header>
  );
};

export default TheHeader;
