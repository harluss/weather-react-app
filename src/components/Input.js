import PropTypes from 'prop-types';

const Input = ({ label, id, name, type = 'text', ...rest }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} {...rest} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
