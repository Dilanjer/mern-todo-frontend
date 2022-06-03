import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const Section = ({ children, delay = 0, className }) => {
  const classes = classNames('relative', className);
  return (
    <motion.div
      className={classes}
      key={true}
      initial={{ opacity: 0, y: 10, rotate: 0.01 }}
      animate={{ opacity: 1, y: 0, rotate: 0.01 }}
      exit={{ opacity: 0 }}
      transition={{ duration: delay, type: 'easeInOut' }}>
      {children}
    </motion.div>
  );
};

export default Section;
