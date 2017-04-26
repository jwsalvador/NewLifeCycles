import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import path from 'path';

import { ENV } from '../../config/env';

/*
 * Server side rendering for production app (boost SEO performance)
 * Client side rendering for development (hot reload + debugging)
*/
const renderer = (req, res) => {
  if (ENV === 'production') {
    const App = require('../../src/containers/App');
    const context = {};

    const componentHtml = renderToString(
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App.default />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(302, context.url);
    } else {
      const html = `
        <!DOCTYPE html>
        <head>
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
          <script>
            WebFont.load({
              google: {
                families: ['Special Elite', 'Life Savers', 'Ruthie']
              }
            });
          </script>
          <style>
            #app, #app > div, #app > div > div:nth-child(2) {
              height: 100%;
            }
          </style>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link href="styles.css" rel="stylesheet">
        </head>
        <body>
          <div id="app">${componentHtml}</div>
          <script type='text/javascript' src='dist/bundle.js'></script>
        </body>
      `;

      res.set('content-type', 'text/html');
      res.send(html);
    }
  } else {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  }
};

export default renderer;
