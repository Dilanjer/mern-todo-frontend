import classNames from 'classnames';
import React from 'react';
import '../styles/box.scss';

const Box = ({ className, children, as, rounded, border, shadow, ...args }) => {
  const classes = classNames('box', className, {
    // prettier-ignore
    'rounded-sm': rounded,
    // prettier-ignore
    "box__border": border,
    'shadow-md drop-shadow-xl': shadow,
  });
  const Tag = as || 'div';
  return (
    <Tag {...args} className={classes}>
      {children}
    </Tag>
  );
};

export default Box;
