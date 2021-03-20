import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { locationShape, locationShapeBoolean } from 'types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.grey};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 230px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  border-style: solid;
  border-color: ${({ isInvalid, theme }) => (isInvalid ? theme.colors.error : theme.colors.grey)};
  padding: 0.4rem 0.5rem;

  :focus {
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const InputGroup = forwardRef(({ label, name, type = 'text', touched, errors, ...rest }, ref) => {
  const isInvalid = touched[name] && errors[name];

  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} id={name} name={name} {...rest} ref={ref} isInvalid={isInvalid} />
      <Error>{isInvalid ? errors[name] : <span>&nbsp;</span>}</Error>
    </Wrapper>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  touched: PropTypes.shape(locationShapeBoolean),
  errors: PropTypes.shape(locationShape),
};

export default InputGroup;
