import React from 'react';
import Spiner from '../UI/Spiner';
import Typography from '../UI/Typography';

const PagePreloader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className={'flex items-center'}>
        <Spiner size={'md'} />
        <Typography size={'xl'}>Loading...</Typography>
      </div>
    </div>
  );
};

export default PagePreloader;
