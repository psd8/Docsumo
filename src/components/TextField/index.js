import React from 'react';
import propTypes from 'prop-types';
import styles from './TextField.scss';

function TextField(props) {
  const { formik, inputProps, label, ...otherProps } = props;
  const nameKey = inputProps.name
  return (
    <div className={`position-relative ${styles.input_wrapper}`}>
      <input
        type={inputProps.type}
        name={inputProps.name}
        placeholder={inputProps.placeholder || label}
        className={`${styles.inputfield}`}
        autoComplete={inputProps.name}
        value={inputProps.value}
        {...otherProps}
      />
      <label className={`${styles.input_label}`}>{label}</label>
      {formik.errors[nameKey] && formik.touched[nameKey] && <p className={`${styles.input_error}`}>{formik.errors[nameKey]}</p>}
    </div>
  );
}

export default TextField;

TextField.defaultProps = {
  formik: {
    values: {},
    errors: {},
  },
  inputProps: {
    type: 'text',
    name: 'name',
    value: '',
  },
  label: 'Email',
};
TextField.propTypes = {
  formik: propTypes.object,
  inputProps: propTypes.shape({
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string,
  }),
  label: propTypes.string,
};
