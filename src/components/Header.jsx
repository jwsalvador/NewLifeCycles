import React from 'react';
import PropTypes from 'prop-types';

import styles from 'assets/css/components/header.css';

const Header = ({ as, children, center }) => {
  const style = [styles[as], center && styles.center].join(' ');

  return (
    <div className={style}>
      {children}
    </div>
  );
};

Header.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  center: PropTypes.bool,
};

export default Header;
