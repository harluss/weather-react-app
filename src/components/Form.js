import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Input from 'components/Input';
import { initialLocation, locationValidationSchema } from 'types';

const Form = ({ fetchForecast }) => {
  const { errors, handleBlur, handleChange, handleReset, handleSubmit, touched, values, setFieldValue } = useFormik({
    initialValues: initialLocation,
    onSubmit: (values) => {
      console.log(values);
      fetchForecast(values.city.trim());
      handleReset();
    },
    validationSchema: locationValidationSchema,
  });
  const cityInputField = useRef();

  const handleOnBlur = (e) => {
    handleBlur(e);
    setFieldValue(e.target.name, e.target.value.trim());
  };

  const setFocus = (element) => element.current.focus();

  useEffect(() => {
    setFocus(cityInputField);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="city"
        name="city"
        value={values.city}
        onChange={handleChange}
        onBlur={handleOnBlur}
        touched={touched}
        errors={errors}
        ref={cityInputField}
      />
      <Input
        label="country"
        name="country"
        value={values.country}
        onChange={handleChange}
        onBlur={handleOnBlur}
        touched={touched}
        errors={errors}
      />
      <button type="submit">check</button>
    </form>
  );
};

Form.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
};

export default Form;
