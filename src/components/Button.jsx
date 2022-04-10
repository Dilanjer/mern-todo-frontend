import classNames from 'classnames';
import React from 'react';

const Button = ({
  children,
  variant = 'contained',
  className,
  fullWidth,
  disabled,
  onClick,
  args,
}) => {
  const classes = classNames(
    className,
    'inline-block p-1.5 px-4 drop-shadow rounded transition-colors  text-center',
    {
      'border border-primary-500 text-primary-800 hover:bg-primary-100 active:bg-primary-200 ':
        variant === 'outlined',
      ' border border-transparent bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700':
        variant === 'contained',
      'border border-transparent text-primary-500 hover:bg-primary-100 active:bg-primary-200':
        variant === 'base',
      'w-full justify-center': fullWidth,
      'disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-400':
        disabled,
    }
  );

  return (
    <button disabled={disabled} onClick={onClick} className={classes} {...args}>
      <span className='inline-flex items-center'>{children}</span>
    </button>
  );
};

export default Button;
