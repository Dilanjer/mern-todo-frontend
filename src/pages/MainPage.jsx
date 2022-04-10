import { useSelector } from 'react-redux';
import React from 'react';

import AddTaskForm from 'components/AddTaskForm';
import TheSidebar from 'components/TheSidebar';
import TheHeader from 'components/TheHeader';
import Button from 'components/Button';
import Task from 'components/Task';
import MenuItem from 'components/MenuItem';
import Menu from 'components/Menu';
import MenuButton from 'components/MenuButton';
import MenuList from 'components/MenuList';
import { Avatar } from 'components/Avatar';

function MainPage() {
  const { user } = useSelector((state) => state);

  const [taskForm, setTaskForm] = React.useState(false);

  const taskFormToggle = () => {
    setTaskForm(() => !taskForm);
  };

  return (
    <section className='dark:bg-gray-800'>
      <TheHeader />
      <div className='max-w-4xl m-auto pt-14'>
        <TheSidebar />
        <main className='ml-56 pt-3 pb-8 px-8 border-r border-l bg-white dark:bg-gray-800 min-h-[calc(100vh_-_3.5rem)] border-gray-300'>
          {!user?.currentUser?.isActivated && (
            <div className='max-w-sm m-auto'>
              <div className=' w-full  text-sm font-medium mb-3 bg-yellow-100 shadow-md  dark:bg-yellow-20 p-2'>
                Your account is not activated. please check your email.
              </div>
            </div>
          )}

          <div className='mb-3'>
            <h3 className='text-xl font-medium'>Inbox</h3>
          </div>
          <div className='space-y-2 my-3'>
            <Task text={'Create my task meneger'} />
          </div>

          <div className='text-center'>
            {taskForm && <AddTaskForm hendleClose={taskFormToggle} />}
            {!taskForm && (
              <Button onClick={taskFormToggle} variant='base'>
                + Add Task
              </Button>
            )}

            <div>
              <Menu
                menuButton={
                  <MenuButton>
                    <Avatar imgUrl={'https://i.pravatar.cc/100'}></Avatar>
                  </MenuButton>
                }>
                <MenuList>
                  <MenuItem label={'Edit'} />
                  <MenuItem label={'Copy text'} />
                  <MenuItem label={'Delete'} />
                </MenuList>
              </Menu>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
export default MainPage;
