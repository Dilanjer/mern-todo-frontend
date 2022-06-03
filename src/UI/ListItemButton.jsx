import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

import './styles/listItemButton.scss';

const ListItemButton = ({
  className,
  icon,
  badge,
  onClick,
  children,
  active,
  as,
  props,
}) => {
  const classes = classNames('list-item-btn', className, {
    'list-item-btn__active': active === true,
  });

  const Tag = as || 'li';

  return (
    <Tag onClick={onClick} className={classes} {...props}>
      {icon && <span className=''>{icon}</span>}
      <Typography size={'sm'} className='my-0 truncate p-1'>
        {children}
      </Typography>
      {badge && badge}
    </Tag>
  );
};

export default ListItemButton;
