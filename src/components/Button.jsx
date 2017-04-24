import React from 'react';
import PropTypes from 'prop-types';

import styles from 'assets/css/components/button.css';

const Button = ({ghost, primary, onClick, children, size = 'small'}) => {
  return (
    <button 
      className={[
        styles.button, 
        ghost && styles.ghost,
        primary && styles.primary, 
        styles[size]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  ghost: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
};

export default Button;