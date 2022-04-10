import classNames from 'classnames';
import React from 'react';

export const Avatar = ({ imgUrl, className, children, onClick }) => {
  const classes = classNames(
    className,
    'w-10 h-10  rounded-full shadow cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"'
  );

  return (
    <div className='relative' onClick={onClick}>
      <img
        id='avatar'
        type='button'
        className={classes}
        src={imgUrl}
        alt='User dropdown'
      />
      {children}
    </div>
  );
};
