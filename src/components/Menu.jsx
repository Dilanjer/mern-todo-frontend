import React from 'react';

const Menu = ({ children, menuButton }) => {
  const buttonRef = React.useRef();
  const cloneButton = React.cloneElement(menuButton, {
    ref: buttonRef,
    onClick: () => console.log('click'),
  });

  React.useEffect(() => {
    console.log(buttonRef.current.offsetWidth);
  }, []);

  return (
    <div className='text-left object-contain inline-block'>
      <div>{cloneButton}</div>
      {children}
    </div>
  );
};

export default Menu;
