import React from 'react';

const ToolTip = ({ children, title, keycode }) => {
  return (
    <div className='relative'>
      {children}
      <div className='absolute w-5 h-5 -top-1  bg-red-300'></div>
    </div>
  );
};

export default ToolTip;
