import classNames from 'classnames';
import React from 'react';

const Typography = ({
  children,
  className,
  as = 'div',
  size,
  truncate,
  id,
  weight,
  clipboard,
  onClick,
  props,
}) => {
  const fontSize = {
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl',
    'text-3xl': size === '3xl',
    'text-4xl': size === '4xl',
    'text-5xl': size === '5xl',
    'text-6xl': size === '6xl',
    'text-7xl': size === '7xl',
    'text-8xl': size === '8xl',
    'text-9xl': size === '9xl',
  };

  const fontWeight = {
    'font-thin': weight === 'thin',
    'font-extralight': weight === 'extralight',
    'font-light': weight === 'light',
    'font-normal': weight === 'normal',
    'font-medium': weight === 'medium',
    'font-semibold': weight === 'semibold',
    'font-bold': weight === 'bold',
    'font-extrabold': weight === 'extrabold',
    'font-black': weight === 'black',
  };

  const classes = classNames(
    'my-1 break-normal text-skin-text-primary tracking-wide',
    className,
    fontSize,
    fontWeight
  );
  const Tag = as || 'div';
  return (
    id,
    (
      <Tag onClick={onClick} id={id} className={classes} {...props}>
        {children}
        {clipboard}
      </Tag>
    )
  );
};

export default Typography;
