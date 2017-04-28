import pageRenderer from '../render/pageRenderer';

import { controllers } from '../db';

const routes = (app) => {
  const { services } = controllers;

  app.get('/api/services', services.All);

  app.get('*', pageRenderer);
};

export default routes;
