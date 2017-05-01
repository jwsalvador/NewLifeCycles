import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import path from 'path';
import fs from 'fs';

import { ENV } from '../../config/env';
import configureStore from '../../src/store/configureStore';

const htmlTemplate = fs.readFileSync('./index.html', 'utf8');

/*
 * Server side rendering for production app (boost SEO performance)
 * Client side rendering for development (hot reload + debugging)
*/
const renderer = (req, res) => {
  if (ENV === 'production') {
    const App = require('../../src/containers/App');
    const context = {};

    const store = configureStore();


    const componentHtml = renderToString(
      <Provider store={store}>
        <StaticRouter
        location={req.url}
        context={context}
        >
          <App.default />
        </StaticRouter>
      </Provider>
      ,
    );

    if (context.url) {
      res.redirect(302, context.url);
    } else {
      const html = 
        htmlTemplate
        .replace('<!--COMPONENT-->', componentHtml)
        .replace('<!--CSS-->', '<link href="styles.css" rel="stylesheet">');

      res.set('content-type', 'text/html');
      res.send(html);
    }
  } else {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  }
};

export default renderer;
