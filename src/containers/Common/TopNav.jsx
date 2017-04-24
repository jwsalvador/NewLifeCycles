import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'components/MenuItem';
import Button from 'components/Button';
import styles from 'assets/css/modules/topnav.css';

class TopNav extends Component {
  render() {
    const inverted = { ...this.props.current === 'home' ? {} : { inverted: true } };
    return (
      <div className={styles.container}>
        <div className={styles.menu}>
          <MenuItem {...inverted}>About</MenuItem>
          <MenuItem {...inverted} to="services" >Services</MenuItem>
          <MenuItem {...inverted}>Contact</MenuItem>
          <Button primary>Book Now</Button>
        </div>
      </div>
    );
  }
}

TopNav.propTypes = {
  current: PropTypes.string.isRequired,
};

export default TopNav;
