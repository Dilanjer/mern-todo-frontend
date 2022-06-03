import { useParams } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useDispatch, useSelector } from 'react-redux';

import ListItemButton from 'UI/ListItemButton';
import List from 'UI/List';
import React from 'react';
import { setCurrentList } from 'store/slices/ListSlice';
import { getAllUserTaskByListId } from 'store/slices/TaskSlice';
import { Link } from 'react-router-dom';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { list } = useSelector((state) => state);

  const setList = (title, id) => {
    dispatch(getAllUserTaskByListId(id));
    return dispatch(setCurrentList({ title, id }));
  };

  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: 'scroll',
        },
      }}
      className='h-full z-10 flex-shrink-0 w-60 pr-2'>
      <List>
        {list.lists.map((el) => {
          return (
            <Link key={el._id} draggable={false} to={`/main/${el._id}`}>
              <ListItemButton
                className={'border-l-4 border-transparent pl-4'}
                active={params.listId === el._id}
                onClick={() => setList(el.title, el._id)}>
                {el.title}
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </OverlayScrollbarsComponent>
  );
};

export default TheSidebar;
