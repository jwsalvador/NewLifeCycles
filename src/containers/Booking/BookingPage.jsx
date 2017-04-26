import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'assets/css/modules/booking.css';
import BookingForm from './BookingForm';

class BookingPage extends Component {
  componentWillMount() {
    this.props.set('booking');
  }
  render() {
    return (
      <div className={styles.bookingContainer}>
        <div className={styles.form}>
          <BookingForm />
        </div>
      </div>
    );
  }
}

BookingPage.propTypes = {
  set: PropTypes.func.isRequired,
};

export default BookingPage;
