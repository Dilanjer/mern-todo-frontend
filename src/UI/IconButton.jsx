import classNames from 'classnames';
import React from 'react';

import './styles/iconButton.scss';

const IconButton = React.forwardRef(
  (
    { children, className, disabled, onClick, border, active, title, args },
    ref
  ) => {
    const classes = classNames(className, 'btn-icon', {
      'btn-icon__active': active,
      'btn-icon__border': border,
    });

    return (
      <button
        type='button'
        title={title}
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={classes}
        {...args}>
        {children}
      </button>
    );
  }
);

export default IconButton;
