import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Welcome from './Welcome';
import AboutUs from './AboutUs';
import Services from './Services';

class HomePage extends Component {
  componentWillMount() {
    this.props.set('home');
  }
  render() {
    return (
      <div>
        <Welcome />
        <AboutUs />
        <Services />
      </div>
    );
  }
}

HomePage.propTypes = {
  set: PropTypes.func.isRequired,
};

export default HomePage;
