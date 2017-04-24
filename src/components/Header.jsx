import React from 'react';

import styles from 'assets/css/components/header.css';

const Header = ({as, children}) => {
  return (
    <div className={styles[as]}>
      {children}
    </div>
  );
};

export default Header;