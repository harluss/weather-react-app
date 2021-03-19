import PropTypes from 'prop-types';
import * as Yup from 'yup';

export const initialLocation = {
  city: '',
  country: '',
};

export const locationShape = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export const locationShapeBoolean = {
  city: PropTypes.bool,
  country: PropTypes.bool,
};

export const locationValidationSchema = Yup.object({
  city: Yup.string()
    .matches(/[a-zA-Z]/, { message: 'Letters only', excludeEmptyString: true })
    .required('Required'),
  country: Yup.string()
    .matches(/[a-zA-Z]/, { message: 'Letters only', excludeEmptyString: true })
    .required('Required'),
});
