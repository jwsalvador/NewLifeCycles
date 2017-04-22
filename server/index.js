import { express, routes, webpack } from './config';

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
   * Routes config
  */
  routes(app);

  return app;
};

export default server;
