import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';

import App from 'containers/App';
import { fetchServices } from 'ducks/modules/services';


injectTapEventPlugin();

const store = configureStore();
store.dispatch(fetchServices());

render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
  ,
  document.getElementById('app'),
);
