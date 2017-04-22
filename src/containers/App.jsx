import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from 'containers/Home/HomePage';
import ServicesPage from 'containers/Services/ServicesPage';

const App = () => (
  <div>
    <Route exact path="/" render={() => <HomePage />} />
    <Route path="/services" render={() => <ServicesPage />} />
  </div>
  );

export default App;
