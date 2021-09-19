import React from 'react';
import propTypes from 'prop-types';
import styles from "./Button.scss";

function Button(props) {
  const { text, type, onClick, isOutlined, classes, ...otherProps } = props;
  return (
    <button className={`${styles.btn} ${classes} ${isOutlined ? styles.outlined : ""}`} type={type} onClick={onClick} {...otherProps}>
      {text}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  type: 'button',
  text: 'Button',
  classes: "",
  isOutlined: false,
  onClick: () => {},
};

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.oneOfType([propTypes.string,propTypes.object]),
  classes: propTypes.string,
  isOutlined: propTypes.bool,
  onClick: propTypes.func,
};
