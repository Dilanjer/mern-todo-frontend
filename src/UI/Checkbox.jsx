import classNames from 'classnames';
import React from 'react';

const Checkbox = ({ onClick, idChecked, className }) => {
  const [checked, setChecked] = React.useState(idChecked);
  const classes = classNames(
    'w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
    className
  );

  const onChangeHandler = () => {
    setChecked(!checked);
  };

  return (
    <input
      checked={checked}
      onChange={onChangeHandler}
      type='checkbox'
      value=''
      className={classes}
    />
  );
};

export default Checkbox;
