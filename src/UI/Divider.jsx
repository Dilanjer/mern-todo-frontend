import classNames from 'classnames';
import React from 'react';

import './styles/divider.scss';
const Divider = ({ orientation = 'horizontal', className }) => {
  const classes = classNames('divider', className, {
    'border-l': orientation === 'vertical',
    'border-b': orientation === 'horizontal',
  });
  return <div className={classes} />;
};

export default Divider;
