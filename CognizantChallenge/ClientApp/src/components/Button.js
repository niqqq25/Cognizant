import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({ children, loading, ...rest }) => {
  return (
    <button
      className={cx(
        'text-white font-bold uppercase bg-gray-500 px-6 py-3 rounded text-sm',
        { 'opacity-50': loading }
      )}
      disabled={loading}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

export default Button;
