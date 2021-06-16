import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ helperText, ...rest }, ref) => {
  return (
    <div>
      <input
        className="rounded-sm border-indigo-200 border-2 px-4 py-2.5 w-full"
        ref={ref}
        {...rest}
      />
      {helperText && (
        <span className="text-red-500 text-xs inline-block">{helperText}</span>
      )}
    </div>
  );
});

Input.propTypes = {
  helperText: PropTypes.string,
};

export default Input;
