import React from 'react';

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import ListItem from './ListItem';
import Button from './Button';

const ListItemWithSublist = ({ items, label, icon, isOpen }) => {
  const [showList, setShowList] = React.useState(isOpen || false);

  return (
    <li>
      <button
        type='button'
        onClick={() => setShowList(() => !showList)}
        className='flex items-center w-full p-1.5 text-sm font-normal rounded text-gray-900 transition duration-75  group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'>
        {icon && (
          <span className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
            {icon}
          </span>
        )}
        <span className='flex-1 ml-3 text-left whitespace-nowrap'>{label}</span>
        {showList ? (
          <ChevronDownIcon className='w-5 h-5' />
        ) : (
          <ChevronLeftIcon className='w-5 h-5' />
        )}
      </button>
      {showList && (
        <ul className='py-2 space-y-2'>
          {items ? (
            items.map((el) => {
              return <ListItem className='pl-5' label={el.title} key={el.id} />;
            })
          ) : (
            <li className='text-center'>
              <span className='text-sm  text-gray-400'>List Empty</span>
            </li>
          )}
          <li className='text-center'>
            <Button variant='base'>+ Add project</Button>{' '}
          </li>
        </ul>
      )}
    </li>
  );
};

export default ListItemWithSublist;
