import { Link } from 'react-router-dom';
import classNames from 'classnames';
import React from 'react';

const ListItem = ({ label, to = '#', className, icon, badge }) => {
  const classes = classNames(
    'flex items-center p-1.5 text-sm font-normal text-gray-900 rounded  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    className
  );

  return (
    <li>
      <Link to={to} className={classes}>
        {icon && (
          <span className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
            {icon}
          </span>
        )}
        <span className='flex-1 ml-3 whitespace-nowrap'>{label}</span>
        {badge &&
          badge.props.label !== undefined &&
          badge.props.label !== null &&
          badge.props.label !== 0 &&
          badge.props.label !== '0' &&
          badge}
      </Link>
    </li>
  );
};

export default ListItem;
