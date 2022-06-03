import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

import './styles/button.scss';

const Button = (
  {
    children,
    className,
    fullWidth,
    variant = 'base',
    disabled,
    active,
    onClick,
    id,
    title,
    args,
  },
  ref
) => {
  const classes = classNames(
    className,
    'btn',
    {
      'btn-base': variant === 'base',
      'btn-outlined': variant === 'outlined',
      'btn-contained': variant === 'contained',
    },
    {
      'w-full justify-center': fullWidth,
      [`btn-${variant}__active`]: active,
    }
  );

  return (
    <button
      ref={ref}
      disabled={disabled}
      title={title}
      id={id}
      onClick={onClick}
      className={classes}
      {...args}>
      <Typography
        size={'sm'}
        className='!my-0 inline-flex items-center !text-inherit'>
        {children}
      </Typography>
    </button>
  );
};

export default React.forwardRef(Button);
