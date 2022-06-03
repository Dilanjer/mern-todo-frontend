import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

const TextField = ({
  register,
  error,
  label,
  id,
  className,
  disabled,
  fullWidth,
  placeholder,
  prefix,
  ...props
}) => {
  const classes = classNames(
    className,
    'p-1.5 min-w-[18rem] bg-white rounded  border placeholder:text-gray-400 border-gray-300  hover:border-primary-400 focus:border-primary-500 focus:outline-none focus:ring-1',
    {
      'disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-400 ':
        disabled,
      'w-full': fullWidth,
      'pl-10': prefix,
      'focus:ring-red-600 ring-1 ring-red-600':
        error && error.hasOwnProperty(id) !== '',
    }
  );

  return (
    <div className={fullWidth && 'w-full'}>
      {label && (
        <label htmlFor={id} className='mb-1 block'>
          <Typography size={'sm'} weight={'medium'}>
            {label}
          </Typography>
        </label>
      )}
      <div className='relative'>
        {prefix && (
          <div className='absolute top-1.5 left-1.5  flex items-center justify-center'>
            {prefix}
          </div>
        )}
        <input
          placeholder={placeholder}
          className={classes}
          {...register}
          disabled={disabled}
          id={id}
          {...props}
        />
      </div>

      {error && error !== {} && (
        <div className='text-red-600 dark:text-red-400 text-sm flex items-start mt-1'>
          <ExclamationCircleIcon className='w-5 h-5 flex-shrink-0 mr-1' />
          <span className='break-normal'>{error.message || 'Error'}</span>
        </div>
      )}
    </div>
  );
};

export default TextField;
