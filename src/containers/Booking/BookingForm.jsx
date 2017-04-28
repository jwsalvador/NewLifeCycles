/* eslint class-methods-use-this: 1 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import styles from 'assets/css/modules/booking.css';

const overrides = {
  select: {
    floatingLabelStyle: {
      color: 'white',
    },
    labelStyle: {
      color: 'white',
    },
    hintStyle: {
      color: 'white',
    },
    inputStyle: {
      color: 'white',
    },
  },
};

class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSelectValueChange = this.handleSelectValueChange.bind(this);
  }

  componentWillMount() {
    const { selected } = this.props;

    this.state = {
      selected,
      name: '',
      contact: '',
      email: '',
      appointment: new Date(),
      time: 'AM',
    };
  }

  renderServiceList() {
    return this.props.all.map(m => (
      <MenuItem key={m._id} value={m._id} primaryText={`${m.title} (${m.price})`} />
      ));
  }

  handleSelectValueChange(e, index, value) {
    if (!e) {
      return this.setState({ appointment: index });
    }
    if (value.length === 2) {
      return this.setState({ time: value });
    }
    this.setState({ selected: value });
  }

  handleValueChange(e, value) {
    this.setState({ [e.target.attributes.type.value]: value });
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <TextInput
          theme="white"
          label="*Full name"
          fullWidth
          onChange={this.handleValueChange}
          value={this.state.name}
          type="name"
        />

        <div className={styles.formGroup}>
          <TextInput
            theme="white"
            label="*Contact number"
            onChange={this.handleValueChange}
            value={this.state.contact}
            type="contact"
          />
          <TextInput
            theme="white"
            label="*Email"
            onChange={this.handleValueChange}
            value={this.state.email}
            type="email"
          />
        </div>

        <SelectField
          {...overrides.select}
          floatingLabelText="*Service Type"
          fullWidth
          value={this.state.selected}
          onChange={this.handleSelectValueChange}
        >
          {this.renderServiceList()}
        </SelectField>

        <div className={styles.formGroup}>
          <DatePicker
            {...overrides.select}
            floatingLabelText="*Appointment Date"
            hintText="Appointment Date"
            value={this.state.appointment}
            defaultDate={new Date()}
            onChange={this.handleSelectValueChange}
          />
          <SelectField
            floatingLabelText="*Preferred time"
            {...overrides.select}
            value={this.state.time}
            onChange={this.handleSelectValueChange}
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

const mapStateToProps = ({ services }) => ({
  all: services.all,
  selected: services.selected,
});

export default connect(mapStateToProps)(BookingForm);
