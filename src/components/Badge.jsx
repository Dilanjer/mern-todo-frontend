import React from 'react';
import classNames from 'classnames';

const Badge = ({ label, className, color = 'default', size = 'base' }) => {
  const baseStyles =
    'font-semibold mr-2 px-2.5 py-0.5 rounded bg-pink-100 text-pink-800 text-md  dark:bg-pink-200 dark:text-pink-900';

  const fontSizes = {
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
  };
  const colors = {
    'dark:bg-blue-200 dark:text-blue-800 bg-blue-100 text-blue-800 ':
      color === 'default',
    'dark:bg-gray-700 dark:text-gray-300 bg-gray-100 text-gray-800 ':
      color === 'dark',
    'dark:bg-red-200 dark:text-red-900 bg-red-100 text-red-800 ':
      color === 'red',
    'dark:bg-green-200 dark:text-green-900 bg-green-100 text-green-800 ':
      color === 'green',
    'dark:bg-yellow-200 dark:text-yellow-900 bg-yellow-100 text-yellow-800 ':
      color === 'yellow',
    'dark:bg-indigo-200 dark:text-indigo-900 bg-indigo-100 text-indigo-800 ':
      color === 'indigo',
    'dark:bg-purple-200 dark:text-purple-900 bg-purple-100 text-purple-800 ':
      color === 'purple',
    'dark:bg-purple-200 dark:text-purple-900 bg-pink-100 text-pink-800 ':
      color === 'pink',
  };

  const classes = classNames(className, baseStyles, fontSizes, colors);

  return <span className={classes}>{label}</span>;
};

export default Badge;
