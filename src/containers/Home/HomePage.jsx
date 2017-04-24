import React, { Component } from 'react';

import Welcome from './Welcome';

class HomePage extends Component {
  componentWillMount() {
    this.props.set('home');
  }
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

export default HomePage;
