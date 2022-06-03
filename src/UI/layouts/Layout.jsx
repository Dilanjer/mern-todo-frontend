import TheHeader from 'components/TheHeader';
import { NotificationProvider } from 'UI/Notification';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NotificationProvider />
      <TheHeader />

      <Outlet />
    </>
  );
};

export default Layout;
