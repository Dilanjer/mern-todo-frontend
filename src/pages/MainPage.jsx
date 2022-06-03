import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import TheSidebar from 'components/TheSidebar';

import { getAllUserLists } from 'store/slices/ListSlice';
import TheHeader from 'components/TheHeader';
import { initTheme } from 'store/slices/ThemeSlice';

function MainPage() {
  const { list, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!list.loading) dispatch(getAllUserLists());
    dispatch(initTheme(user.currentUser.theme));
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <TheHeader />
      <div className='flex h-full w-full'>
        <TheSidebar />
        <OverlayScrollbarsComponent className='w-full px-2'></OverlayScrollbarsComponent>
      </div>
    </div>
  );
}
export default MainPage;
