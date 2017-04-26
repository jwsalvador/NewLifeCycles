import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'assets/css/modules/services.css';
import ServicesForm from './ServicesForm';

class ServicesPage extends Component {
  componentWillMount() {
    this.props.set('services');
  }
  render() {
    return (
      <div className={styles.servicesContainer}>
        <div className={styles.form}>
          <ServicesForm />
        </div>
      </div>
    );
  }
}

ServicesPage.propTypes = {
  set: PropTypes.func.isRequired,
};

export default ServicesPage;
