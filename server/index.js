import { express, routes, webpack } from './config';
import { connect } from './db';

const server = (app) => {
  /*
   * Express configurations
  */
  express(app);

  /*
   * Webpack Development server configuration
   * WebpackDev should be called prior Routes
  */
  webpack(app);

  /*
   * DB initialize
  */
  connect();

  /*
   * Routes config
  */
  routes(app);

  return app;
};

export default server;
