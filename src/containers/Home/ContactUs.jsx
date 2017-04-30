import React from 'react';

import Header from 'components/Header';
import LabelIcon from 'components/LabelIcon';

import styles from 'assets/css/modules/home.css';

const ContactUs = () => {
  return (
    <div className={[styles.section, styles.contactUs].join(' ')}>
      <Header as="section" short>Come & See Us</Header>
      <div className={styles.info}>
        <LabelIcon 
          icon="location_on"
        >
          163 Tenterfield Drive, Burnside Heights, VIC 3023
        </LabelIcon>
        <LabelIcon 
          icon="phone"
        >
          0449775107
        </LabelIcon>
        <LabelIcon 
          icon="date_range"
        >
          <div>
            <div><div className={styles.date}>Mon - Wed:</div>9:00am - 6:00pm</div>
            <div><div className={styles.date}>Thu - Fri:</div>4:00pm - 8:00pm</div>
            <div><div className={styles.date}>Sat:</div>2:00pm - 6:00pm</div>
          </div>
        </LabelIcon>
      </div>
    </div>
  );
};

export default ContactUs;