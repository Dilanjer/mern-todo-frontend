import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import { resetStatus } from 'store/slices/UserSlice';
import Typography from '../UI/Typography';
import Section from '../UI/layouts/Section';

export const RegistrationSuccessPage = ({ userEmail }) => {
  const dispatch = useDispatch();

  const resetRegisterSuccesForm = () => {
    dispatch(resetStatus(null));
  };

  return (
    <Section delay={0.3} className={'flex mt-24 justify-center'}>
      <div className='max-w-md text-center'>
        <div className='mb-3 text-primary-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-16 h-16 m-auto'
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

        <Typography className={'mb-3'} as='h2' weight={'medium'} size={'2xl'}>
          Registration successfully completed, verify your account.
        </Typography>
        <Typography className={'mb-5 dark:text-gray-400'} as='p' size={'lg'}>
          An email has been sent to your email address
          <Typography className={'dark:text-gray-300'} as='span'>
            {` ${userEmail && userEmail} `}
          </Typography>
          with a link to verify your account.
        </Typography>

        <div className='text-center text-md'>
          <Typography as='span'>Back to </Typography>
          <Link
            onClick={resetRegisterSuccesForm}
            className='underline text-primary-500'
            to='/login'>
            Sign In
          </Link>
        </div>
      </div>
    </Section>
  );
};
