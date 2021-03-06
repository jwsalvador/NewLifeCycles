import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ENABLE_BOOKING } from '../../../config/settings';
import MenuItem from 'components/MenuItem';
import Button from 'components/Button';
import styles from 'assets/css/modules/topnav.css';

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: 'white',
      redirect: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    const hideMenu = nextProps.current === 'booking';
    const state = Object.assign({}, this.state, { redirect: false });

    if (hideMenu) {
      state.logo = 'white';
    }

    this.setState(state);
  }

  navigate() {
    this.setState({ redirect: true });
  }

  handleScroll() {
    if (!document.getElementById('aboutus-section')) {
      return;
    }
    const elm = (document.getElementById('aboutus-section').getBoundingClientRect().top - document.body.scrollTop);
    const pageYOffset = window.pageXOffset;

    if (pageYOffset >= elm) {
      this.setState({ logo: 'black' });
    } else {
      this.setState({ logo: 'white' });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/booking" />;
    }

    const showMenu = this.props.current === 'home';
    const isWhiteLogo = this.state.logo === 'white';
    return (
      <div id="navBar" className={[styles.container, !isWhiteLogo && styles.navScroll].join(' ')}>
        <Link to="/" style={{ height: '100%' }}>
          {isWhiteLogo
            ? <img src="https://s3-ap-southeast-2.amazonaws.com/newlifecycles/logo-white.png" alt="New Life Cycles" width="12%" height="10%" />
            : <img src="https://s3-ap-southeast-2.amazonaws.com/newlifecycles/logo-black.png" alt="New Life Cycles" width="12%" height="10%" />
          }
        </Link>
        {showMenu &&
          <div className={styles.menu}>
            <MenuItem>About</MenuItem>
            <MenuItem to="services" >Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            {ENABLE_BOOKING && <Button
              onClick={() => this.navigate()}
              primary
            >
              Book Now
            </Button>}
          </div>
        }
      </div>
    );
  }
}

TopNav.propTypes = {
  current: PropTypes.string.isRequired,
};

export default TopNav;
