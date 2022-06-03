/* eslint-disable react-hooks/rules-of-hooks */
import classNames from 'classnames';
import Box from 'UI/layouts/Box';
import React from 'react';
import Overlay from './Overlay';
import Typography from './Typography';
import { XIcon } from '@heroicons/react/outline';
import Portal from 'UI/layouts/Portal';
import IconButton from './IconButton';
import { motion } from 'framer-motion';
import useKeyDown from 'hooks/useKeyDown';

const Popup = ({ onClose, className, open, title, children, overlayClose }) => {
  if (!open) return null;

  const classes = classNames('cursor-default p-5', className);

  useKeyDown('Escape', onClose);

  const handleClick = (e) => e.stopPropagation();
  const handleClose = () => overlayClose && onClose();

  return (
    <Portal>
      <Overlay
        className={overlayClose && 'cursor-pointer'}
        onClick={handleClose}>
        <motion.div
          className={classes}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
          }}>
          <Box rounded shadow border onClick={handleClick} className={'p-5'}>
            <div className='flex items-center justify-between mb-4'>
              <Typography size={'2xl'} weight={'bold'}>
                {title}
              </Typography>
              <IconButton onClick={onClose}>
                <XIcon className='w-5' />
              </IconButton>
            </div>
            {children}
          </Box>
        </motion.div>
      </Overlay>
    </Portal>
  );
};

export default Popup;
