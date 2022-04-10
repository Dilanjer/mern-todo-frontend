import { Link } from 'react-router-dom';
import classNames from 'classnames';
import React from 'react';

const MenuItem = ({ label, className, onClick }) => {
  return (
    <li>
      <Link
        to=''
        className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
