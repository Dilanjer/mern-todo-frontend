import React from 'react';
import classNames from 'classnames';

const MenuButton = React.forwardRef((props, ref) => {
  return (
    <div onClick={props.onClick} ref={ref}>
      {props.children}
    </div>
  );
});

export default MenuButton;
