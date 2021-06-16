import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const alertVariants = {
  success: 'bg-green-100 border-green-400 text-green-700',
  danger: 'bg-red-100 border-red-400 text-red-700',
};

const Alert = ({ variant, children, className }) => {
  return (
    <div
      className={cx(
        'border rounded py-3 px-4 mb-4',
        alertVariants[variant],
        className
      )}
      role="alert"
    >
      {children}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Alert;
