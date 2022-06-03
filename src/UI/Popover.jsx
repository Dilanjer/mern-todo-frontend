/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import classNames from 'classnames';
import React from 'react';

import usePopoverPosition from 'hooks/usePopoverPosition';
import useWindowResize from 'hooks/useWindowResize';
import useOutsideClick from 'hooks/useOutsideClick';
import useKeyDown from 'hooks/useKeyDown';

import Box from 'UI/layouts/Box';

const Popover = ({
  anchorEl,
  children,
  onClose,
  isOpen,
  origin = 'center',
  className,
  props,
}) => {
  if (!isOpen) return null;
  const ref = React.useRef();
  const { originPos } = usePopoverPosition(ref, anchorEl);

  useOutsideClick(ref, anchorEl, onClose);
  useKeyDown('Escape', onClose);
  useWindowResize(onClose);

  const classes = classNames('absolute z-20 !m-0', className, originPos);
  return (
    <motion.div
      className={classes}
      initial={{
        scale: 0.9,
        opacity: 0.2,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.7,
        opacity: 0,
      }}
      transition={{
        duration: 0.15,
        type: 'tween',
      }}
      ref={ref}
      {...props}>
      {isOpen && (
        <Box border shadow rounded className={'relative z-50 w-full'}>
          {children}
        </Box>
      )}
    </motion.div>
  );
};

export default Popover;
