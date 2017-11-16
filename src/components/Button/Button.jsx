import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';
import styles from './Button.css';

function Button(props) {
  const {
    className,
    children,
    secondary,
    onClick,
  } = props;

  const rootClassName = css(
    className,
    styles['button'],
    secondary ? styles['button--secondary'] : null,
  );

  return (
    <button className={rootClassName} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  secondary: false,
};

export default Button;
