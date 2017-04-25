import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import TextInput from 'components/TextInput';
import styles from 'assets/css/modules/services.css';

import services from '../../../services.json';

class ServicesForm extends Component {
  renderServiceList() {
    return services.map(m =>  {
      return (
        <MenuItem key={m.id} value={m.id} primaryText={m.title} />
      )
    });
    
  }

  render() {
    return (
      <div>
        <div className={styles.formGroup}>
          <TextInput theme="white" label="First Name" className={styles.formInput}/>
          <TextInput theme="white" label="Last Name" className={styles.formInput}/>
        </div>

        <div className={styles.formGroup}>
          <SelectField
            floatingLabelText="Services"
            fullWidth={true}
            floatingLabelStyle={{color: 'white'}}
          >
            {this.renderServiceList()}
          </SelectField>
        </div>
        
        <div className={styles.formGroup}>
          <DatePicker 
            hintText="Appointment Date"
            hintStyle={{color: 'white'}} 
            inputStyle={{color: 'white'}} 
            fullWidth={true}
          />
        </div>        
        

        <TextInput theme="white"
          label="Any comments"
          multiLine={true}
          rows={2}
          rowsMax={4}
          fullWidth={true}
        />
      </div>
    );
  }
}

export default ServicesForm;