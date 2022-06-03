import { motion } from 'framer-motion';
import classNames from 'classnames';
import React from 'react';

const Overlay = ({ children, onClick, className }) => {
  const classes = classNames(
    'bg-black/30 fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-10 ',
    className
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
      onClick={onClick}
      className={classes}>
      {children}
    </motion.div>
  );
};

export default Overlay;
