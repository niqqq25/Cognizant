import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Textarea = React.forwardRef(({ className, helperText, ...rest }, ref) => {
  return (
    <div>
      <textarea
        className={cx(
          'rounded-sm border-indigo-200 border-2 w-full py-2 px-4',
          className
        )}
        ref={ref}
        {...rest}
      />
      {helperText && (
        <span className="text-red-500 text-xs inline-block">{helperText}</span>
      )}
    </div>
  );
});

Textarea.propTypes = {
  className: PropTypes.string,
  helperText: PropTypes.string,
};

export default Textarea;
