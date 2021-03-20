import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import styled from 'styled-components';
import InputGroup from 'components/InputGroup';
import { initialLocation, locationValidationSchema } from 'types';
import { SectionWrapper } from 'components/SectionWrapper';

const Button = styled.button`
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 230px;
  padding: 0.6rem;
  margin-top: 1.55rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    transition: all 0.3s ease-in-out;
  }

  :disabled {
    color: ${({ theme }) => theme.colors.grey};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }
`;

const Form = ({ fetchForecast }) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isValid,
    dirty,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: initialLocation,
    onSubmit: (values) => {
      fetchForecast(values);
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
    <SectionWrapper first as="form" onSubmit={handleSubmit}>
      <InputGroup
        label="city"
        name="city"
        value={values.city}
        onChange={handleChange}
        onBlur={handleOnBlur}
        touched={touched}
        errors={errors}
        ref={cityInputField}
      />
      <InputGroup
        label="country"
        name="country"
        value={values.country}
        onChange={handleChange}
        onBlur={handleOnBlur}
        touched={touched}
        errors={errors}
      />
      <Button disabled={!(isValid && dirty)} type="submit">
        check
      </Button>
    </SectionWrapper>
  );
};

Form.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
};

export default Form;
