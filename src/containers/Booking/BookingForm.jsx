/* eslint class-methods-use-this: 1 */

import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import styles from 'assets/css/modules/booking.css';

import services from '../../../services.json';

class BookingForm extends Component {
  renderServiceList() {
    return services.map(m => (
      <MenuItem key={m.id} value={m.id} primaryText={`${m.title} (${m.price})`} />
      ));
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <TextInput
          theme="white"
          label="Full name"
          fullWidth
        />

        <div className={styles.formGroup}>
          <TextInput
            theme="white"
            label="Contact number"
          />
          <TextInput
            theme="white"
            label="Email"
          />
        </div>

        <SelectField
          floatingLabelText="Service Type"
          floatingLabelStyle={{ color: 'white' }}
          fullWidth
        >
          {this.renderServiceList()}
        </SelectField>

        <div className={styles.formGroup}>
          <DatePicker
            floatingLabelText="Appointment Date"
            floatingLabelStyle={{ color: 'white' }}
            hintText="Appointment Date"
            hintStyle={{ color: 'white' }}
            inputStyle={{ color: 'white' }}
          />
          <SelectField
            floatingLabelText="Preferred time"
            floatingLabelStyle={{ color: 'white' }}
          >
            <MenuItem value="AM" primaryText="AM" />
            <MenuItem value="PM" primaryText="PM" />
          </SelectField>
        </div>

        <TextInput
          theme="white"
          label="Any comments"
          multiLine
          rows={2}
          rowsMax={4}
          fullWidth
        />

        <Button primary size="medium">Submit</Button>

      </div>
    );
  }
}

export default BookingForm;
