import classNames from 'classnames';
import React from 'react';

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
    'p-2 min-w-[18rem] rounded border border-gray-300 shadow focus:shadow-primary-300 hover:border-primary-400 focus:border-primary-500 focus:outline-none focus:ring-0 transition-colors',
    {
      'disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-400 ':
        disabled,
      'w-full': fullWidth,
      'pl-10': prefix,
      'shadow-red-400 border-gray-0 !border-red-600 hover:!border-red-600 focus:!border-red-600 focus:!shadow-red-300':
        error && error.hasOwnProperty(id) !== '',
    }
  );

  return (
    <div className={fullWidth && 'w-full'}>
      {label && (
        <label htmlFor={id} className='text-sm block font-medium mb-1'>
          {label}
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
        <div className='text-red-600 text-sm flex items-start mt-2'>
          {
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 flex-shrink-0 mr-2'
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
          }
          <span className='break-normal'>{error.message || 'Error'}</span>
        </div>
      )}
    </div>
  );
};

export default TextField;
