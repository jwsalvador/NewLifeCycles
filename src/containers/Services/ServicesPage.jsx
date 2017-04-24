import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ServicesPage.propTypes = {
  set: PropTypes.func.isRequired,
};

export default ServicesPage;
