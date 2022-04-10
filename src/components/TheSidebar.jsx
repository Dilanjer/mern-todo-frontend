import { BeakerIcon, ArchiveIcon } from '@heroicons/react/solid';
import { v4 } from 'uuid';

import ListItemWithSublist from './ListItemWithSublist';
import ListItem from './ListItem';
import Badge from './Badge';
import List from './List';

const TheSidebar = () => {
  const listData = [
    {
      id: v4(),
      title: 'Inbox',
      icon: 'BeakerIcon',
      badge: 3,
    },
    {
      id: v4(),
      title: 'Today',
      icon: 'ArchiveIcon',
      badge: 15,
    },
    {
      id: v4(),
      title: 'Calendar',
      icon: null,
      badge: 0,
    },
    {
      id: v4(),
      title: 'Inbox',
      icon: 'BeakerIcon',
      items: [
        {
          id: v4(),
          title: 'Heloo',
        },
        {
          id: v4(),
          title: 'Hello 2',
        },
        {
          id: v4(),
          title: 'Heloo',
        },
        {
          id: v4(),
          title: 'Hello 2',
        },
        {
          id: v4(),
          title: 'Heloo',
        },
        {
          id: v4(),
          title: 'Hello 2',
        },
      ],
    },
  ];

  return (
    <aside className='w-56 h-screen fixed' aria-label='Sidebar'>
      <div className='h-full pt-3 px-2 overflow-y-auto dark:bg-gray-800'>
        <List>
          {listData.map((el) => {
            return !el.items ? (
              <ListItem
                label={el.title}
                icon={<BeakerIcon />}
                badge={<Badge label={el.badge} size='sm' />}
                key={el.id}
              />
            ) : (
              <ListItemWithSublist
                label={el.title}
                isOpen={false}
                key={el.id}
                items={el.items}
                icon={<ArchiveIcon />}
              />
            );
          })}
        </List>

        <div
          className='p-4 m-2 mt-10 rounded-lg bg-blue-50 dark:bg-blue-900'
          role='alert'>
          <div className='flex items-center mb-3'>
            <Badge color={'red'} size={'sm'} label={'Upgrade to Pro'} />
          </div>
          <p className='mb-3 text-sm text-blue-900 dark:text-blue-400'>
            Preview the new Flowbite dashboard navigation! You can turn the new
            navigation off for a limited time in your profile.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default TheSidebar;
