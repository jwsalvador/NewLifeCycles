import React, { Component } from 'react';

import Welcome from './Welcome';
import AboutUs from './AboutUs';

class HomePage extends Component {
  componentWillMount() {
    this.props.set('home');
  }
  render() {
    return (
      <div>
        <Welcome />
        <AboutUs />
      </div>
    );
  }
}

export default HomePage;
