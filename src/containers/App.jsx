import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TopNav from 'containers/Common/TopNav';
import HomePage from 'containers/Home/HomePage';
import BookingPage from 'containers/Booking/BookingPage';

require('assets/css/global.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <div>
        <TopNav current={this.state.page} />
        <Route exact path="/" render={() => <HomePage set={this.setPage} />} />
        <Route path="/booking" render={() => <BookingPage set={this.setPage} />} />
      </div>
    );
  }
}

export default App;
