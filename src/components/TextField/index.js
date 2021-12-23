import React from 'react';
import propTypes from 'prop-types';
import styles from './TextField.scss';
import { Form } from 'react-bootstrap';

function TextField(props) {
  const { formik, inputProps, label, ...otherProps } = props;
  const nameKey = inputProps.name;

  /******************* 
  @purpose : Render TextField Component
  @Parameter : {}
  @Author : Prashant
  ******************/
  return (
    <div className={`position-relative ${styles.input_wrapper}`}>
      <Form.Label className={styles.input_label}>{label}</Form.Label>
      <input
        type={inputProps.type}
        name={inputProps.name}
        placeholder={inputProps.placeholder || label}
        className={`${styles.inputfield}`}
        autoComplete={inputProps.name}
        value={inputProps.value}
        {...otherProps}
      />
      {formik.errors[nameKey] && formik.touched[nameKey] && (
        <p className={`${styles.input_error}`}>{formik.errors[nameKey]}</p>
      )}
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
