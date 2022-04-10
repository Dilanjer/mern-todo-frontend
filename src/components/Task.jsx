import { DotsVerticalIcon } from '@heroicons/react/outline';
import React from 'react';

const Task = ({ text, complated }) => {
  return (
    <div className='w-full flex items-center space-x-2'>
      <div>
        <div className='flex items-center'>
          <input
            id='checkbox-all'
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label htmlFor='checkbox-all' className='sr-only'>
            checkbox
          </label>
        </div>
      </div>
      <div className='text-sm truncate'>{text.trim()}</div>
      <div className='relative !ml-auto flex-shrink-0'>
        <div className='w-7 h-7  p-1  rounded cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-colors'>
          <DotsVerticalIcon />
        </div>
      </div>
    </div>
  );
};

export default Task;
