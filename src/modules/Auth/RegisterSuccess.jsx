import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import { resetStatus } from 'store/slices/UserSlice';

export const RegisterSuccess = ({ userEmail }) => {
  const dispatch = useDispatch();

  const resetRegisterSuccesForm = () => {
    dispatch(resetStatus(null));
  };

  return (
    <div className='text-center max-w-sm'>
      <div className='text-primary-600 mb-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-16 w-16  m-auto'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
      <h2 className='block text-xl font-medium mb-3'>
        Registration successfully completed, verify your account.
      </h2>
      <p className='block text-gray-500 mb-5'>
        An email has been sent to your email address
        <span className='text-gray-700'>
          {userEmail !== '' ? ` ${userEmail} ` : ' email '}
        </span>
        with a link to verify your account.
      </p>
      <div className='text-center text-md'>
        <span>Back to </span>
        <Link
          onClick={resetRegisterSuccesForm}
          className='text-primary-500 underline'
          to='/login'>
          Sign In
        </Link>
      </div>
    </div>
  );
};
