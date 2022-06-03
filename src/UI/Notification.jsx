import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import React from 'react';

import { removeNotification } from 'store/slices/NotificationSlice';
import { XIcon } from '@heroicons/react/outline';
import IconButton from './IconButton';

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

  const close = () => {
    if (notificationRef.current) {
      dispatch(removeNotification(notificationRef.current.id));
    }
  };

  React.useEffect(() => {
    clearTimeout();
    setTimeout(close, closeDelay);

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 300, rotate: 0.02 }}
      animate={{ opacity: 1, x: 0, rotate: 0.02 }}
      exit={{ opacity: 0, x: 300, rotate: 0.02 }}
      transition={{ type: 'spring', duration: 0.3 }}
      id={id}
      ref={notificationRef}
      className={wrapperClasses}>
      <div className={textClasses}>{message}</div>

      <button onClick={close} type='button' className={buttonClasses}>
        <XIcon className='w-5 h-5' />
      </button>
    </motion.div>
  );
};

export const NotificationProvider = ({ className }) => {
  const classes = classNames(
    'absolute z-50 overflow-hidden right-2 top-16 w-72',
    className
  );
  const { notification } = useSelector((state) => state);
  return (
    <div className={classes}>
      <AnimatePresence initial={false}>
        {notification.notificationsArray.map((item) => (
          <Notification
            key={item.id}
            id={item.id}
            type={item.type}
            message={item.message || 'Unexpected error'}
            closeDelay={3000}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
