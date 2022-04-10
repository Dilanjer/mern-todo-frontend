import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { Notification, NotificationProvider } from 'components/Notification';
import { checkAuth } from 'store/slices/UserSlice';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';

const App = () => {
  const { user, notification } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <div className='text-gray-900 dark'>
      {notification.notificationsArray.length !== 0 && (
        <NotificationProvider>
          {notification.notificationsArray.map((item) => (
            <Notification
              key={item.id}
              id={item.id}
              type={item.type}
              message={item.message}
              closeDelay={3000}
            />
          ))}
        </NotificationProvider>
      )}

      <Routes>
        {user.isAuth ? (
          <>
            <Route path='*' element={<Navigate to={'/main'} replace />} />
            <Route path='/main/*' element={<MainPage />} />
          </>
        ) : (
          <>
            <Route path='/*' element={<AuthPage />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
