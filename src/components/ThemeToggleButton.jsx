import { SunIcon } from '@heroicons/react/outline';
import { MoonIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useColorMode } from 'hooks/useColorMode';
import IconButton from 'UI/IconButton';

const ThemeToggleButton = () => {
  const { isDark, toggleColorMode } = useColorMode();
  const classes = classNames('', {
    '!bg-yellow-200 !text-gray-800': isDark,
    '!bg-indigo-500 !text-white': !isDark,
  });

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={isDark}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeInOut' }}>
        <IconButton
          title={'Theme toggle button'}
          className={classes}
          onClick={toggleColorMode}>
          {isDark ? <SunIcon className='w-5' /> : <MoonIcon className='w-5' />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
