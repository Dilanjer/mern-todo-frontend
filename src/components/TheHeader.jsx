import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { logout } from 'store/slices/UserSlice';
import { Avatar } from './Avatar';
import Button from './Button';

const TheHeader = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
    return;
  };

  return (
    <header className='z-10 fixed h-14 right-0 left-0 top-0 border-b dark:bg-gray-800 bg-white shadow'>
      <div className='max-w-5xl m-auto flex items-center'>
        <nav className='py-2.5 flex '>
          <Button onClick={userLogout}>Log out</Button>
        </nav>
        <div className={'ml-auto flex items-center space-x-3'}>
          <div className='font-medium text-right text-sm dark:text-whit'>
            <div>{user.currentUser.name}</div>
            <div className='text-xs '>{user.currentUser.email}</div>
          </div>
          <Avatar imgUrl={'https://i.pravatar.cc/100'}></Avatar>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
