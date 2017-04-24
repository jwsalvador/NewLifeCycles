import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'assets/css/components/menuItem.css';

const MenuItem = ({children, to, inverted}) => {
  return (
    <Link to={`/${to}`} className={styles[inverted ? 'linkContainerInverted' : 'linkContainer']}>
      <div>
        {children}
      </div>
    </Link>
  );
};

export default MenuItem;