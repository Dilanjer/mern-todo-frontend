import React from 'react';
import Button from 'UI/Button';
import Typography from 'UI/Typography';

const ThemeButton = ({ imgSrc, name, active, onClick }) => {
  return (
    <Button
      variant={'outlined'}
      id={name}
      onClick={onClick}
      active={active !== name}
      disabled={active === name}>
      <div className='pointer-events-none'>
        <img
          className='mb-2 shadow  select-none'
          src={imgSrc}
          alt={`${name}_theme_img`}
        />

        <Typography
          className={active === name && 'text-skin-primary'}
          weight={'semibold'}
          size={'sm'}>
          {name}
        </Typography>
      </div>
    </Button>
  );
};

export default ThemeButton;
