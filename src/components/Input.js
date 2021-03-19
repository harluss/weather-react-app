import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { locationShape, locationShapeBoolean } from 'types';

const Input = forwardRef(({ label, name, type = 'text', touched, errors, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} {...rest} ref={ref} />
      {touched[name] && errors[name]}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  touched: PropTypes.shape(locationShapeBoolean),
  errors: PropTypes.shape(locationShape),
};

export default Input;
