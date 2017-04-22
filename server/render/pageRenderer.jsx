import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import path from 'path';

import App from '../../src/containers/App';
import { ENV } from '../../config/env';

/*
 * Server side rendering for production app (boost SEO performance)
 * Client side rendering for development (hot reload + debugging)
*/
const renderer = (req, res) => {
  if (ENV === 'production') {
    const context = {};

    const html = renderToString(
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(302, context.url);
    } else {
      res.set('content-type', 'text/html');
      res.send(html);
    }
  } else {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  }
};

export default renderer;
