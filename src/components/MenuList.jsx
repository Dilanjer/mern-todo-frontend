import classNames from 'classnames';
import React from 'react';

const MenuList = ({ children, className }) => {
  const classes = classNames(
    'z-10 bg-white w-auto text-left rounded divide-y divide-gray-100 shadow dark:bg-gray-700',
    className
  );
  return (
    <div className={classes}>
      <ul className='py-1 text-sm text-gray-700 dark:text-gray-200'>
        {children}
      </ul>
    </div>
  );
};

export default MenuList;
