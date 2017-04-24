import React, { Component } from 'react';

class ServicesPage extends Component {
  componentWillMount() {
    this.props.set('services');
  }
  render() {
    return (
      <div>
        This is services page
      </div>
    );
  }
}

export default ServicesPage;
