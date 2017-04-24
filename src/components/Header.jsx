import React from 'react';

import styles from 'assets/css/components/header.css';

const Header = ({as, children, center}) => {
  const style = [styles[as], center && styles.center].join(' ');

  return (
    <div className={style}>
      {children}
    </div>
  );
};

export default Header;