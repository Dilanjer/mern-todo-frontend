import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { checkAuth } from 'store/slices/UserSlice';

import { LoginPage } from 'pages/LoginPage';
import { RegistrationPage } from 'pages/RegitrationPage';
import { NotificationProvider } from 'UI/Notification';
import SettingsPage from 'pages/SettingsPage';
import PagePreloader from 'components/PagePreloader';

const MainPage = React.lazy(() => import('./pages/MainPage'));

const App = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <>
      <NotificationProvider />
      <Routes>
        {user.isAuth ? (
          <>
            <Route path='main/*' element={<MainPage />} />
            <Route
              path='main/:listId'
              element={
                <React.Suspense fallback={<PagePreloader />}>
                  <MainPage />
                </React.Suspense>
              }
            />
            <Route path='main/settings' element={<SettingsPage />} />
            <Route index element={<Navigate to={'/main'} replace />} />
            <Route path='*' element={<Navigate to={'/main'} replace />} />
          </>
        ) : (
          <>
            <Route path='login' element={<LoginPage />} />
            <Route path='registration' element={<RegistrationPage />} />
            <Route index element={<Navigate to={'/login'} replace />} />
            <Route path='*' element={<Navigate to={'/login'} replace />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
