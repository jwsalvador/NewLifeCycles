import React from 'react';

import styles from 'assets/css/components/labelIcon.css';

const LabelIcon = ({icon, children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className={`material-icons ${styles.materialIcon}`}>{icon}</i>
      </div>
      <div className={styles.iconBody}>
        {children}
      </div>
    </div>
  );
};

export default LabelIcon;