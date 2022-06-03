import classNames from 'classnames';
import React from 'react';

const List = ({ children, className, as, disablePadding }) => {
  const classes = classNames(className, 'py-2', {
    'space-y-1': !disablePadding,
  });

  const Tag = as || 'ul';

  return <Tag className={classes}>{children}</Tag>;
};

export default List;
