import React from 'react';
import PropTypes from 'prop-types';

import styles from 'assets/css/components/header.css';

const Header = ({ as, children, center, short }) => {
  const style = [styles[as], center && styles.center, short && styles.borderShort].join(' ');

  return (
    <div className={style}>
      {children}
    </div>
  );
};

Header.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  short: PropTypes.bool,
};

export default Header;
