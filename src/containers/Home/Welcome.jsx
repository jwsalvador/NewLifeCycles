import React from 'react';

import Button from 'components/Button';
import styles from 'assets/css/modules/home.css';

const Welcome = () => {
  return (
    <div className={styles.bgImg}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.subContainer} >
            <div className={styles.infoTitle}>
              <span className={styles.red}>New</span> life cycles
            </div>
            <div className={styles.infoBody}>
              We deliver quality repair and restoration services at a fraction of a cost.
            </div>
            <Button size="large" ghost>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;