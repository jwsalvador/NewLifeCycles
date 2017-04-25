import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from 'assets/css/components/menuItem.css';

const MenuItem = ({ children, to, inverted }) => (
  <Link to={`/${to}`} className={styles[inverted ? 'linkContainerInverted' : 'linkContainer']}>
    <div>
      {children}
    </div>
  </Link>
  );

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  inverted: PropTypes.bool,
};

export default MenuItem;
