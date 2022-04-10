import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import React from 'react';

import { removeNotification } from 'store/slices/NotificationSlice';

export const NotificationProvider = ({ children }) => {
  return (
    <div className='absolute z-50 overflow-hidden right-2 top-2 w-72 pb-3 pl-3'>
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </div>
  );
};

export const Notification = ({
  type = 'info',
  message,
  id,
  closeDelay = 2000,
}) => {
  const dispatch = useDispatch();
  const notificationRef = React.useRef();
  const textColors = {
    'text-blue-700': type === 'info',
    'text-red-700': type === 'error',
    'text-green-700': type === 'success',
    'text-yellow-700': type === 'warning',
  };

  const wrapperClasses = classNames(
    'flex items-center drop-shadow rounded px-3 py-2 mb-4 max-w-sm',
    {
      'bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200':
        type === 'info',
      'bg-red-100 border-t-4 border-red-500 dark:bg-red-200': type === 'error',
      'bg-green-100 border-t-4 border-green-500 dark:bg-green-200':
        type === 'success',
      'bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-20':
        type === 'warning',
    }
  );

  const buttonClasses = classNames(
    'ml-auto rounded-lg focus:ring-2 inline-flex h-8 w-8 p-1.5',
    {
      'bg-blue-100 dark:bg-blue-200 text-blue-500  focus:ring-blue-400  hover:bg-blue-200 dark:hover:bg-blue-300':
        type === 'info',
      'bg-red-100 dark:bg-red-200 text-red-500  focus:ring-2 focus:ring-red-400  hover:bg-red-200 dark:hover:bg-red-300':
        type === 'error',
      'bg-green-100 dark:bg-green-200 text-green-500  focus:ring-2 focus:ring-green-400  hover:bg-green-200 dark:hover:bg-green-300':
        type === 'success',
      'bg-yellow-100 dark:bg-yellow-200 text-yellow-500  focus:ring-2 focus:ring-yellow-400  hover:bg-yellow-200 dark:hover:bg-yellow-300':
        type === 'warning',
    }
  );

  const textClasses = classNames('ml-3 mr-2 text-sm font-medium', textColors);
  const iconClasses = classNames('flex-shrink-0 w-5 h-5', textColors);

  const close = () => {
    dispatch(removeNotification(notificationRef.current.id));
  };

  React.useEffect(() => {
    clearTimeout();
    setTimeout(close, closeDelay);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 0.3 }}
      id={id}
      ref={notificationRef}
      className={wrapperClasses}>
      <svg
        className={iconClasses}
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
          clipRule='evenodd'></path>
      </svg>
      <div className={textClasses}>{message}</div>
      <button onClick={close} type='button' className={buttonClasses}>
        <span className='sr-only'>Dismiss</span>
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
      </button>
    </motion.div>
  );
};
