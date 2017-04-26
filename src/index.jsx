import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'containers/App';

injectTapEventPlugin();

render(
  <Router>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Router>
  ,
  document.getElementById('app'),
);
