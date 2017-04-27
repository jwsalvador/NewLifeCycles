import pageRenderer from '../render/pageRenderer';

import { controllers } from '../db';

const routes = (app) => {
  console.log(controllers);

  const { services } = controllers;

  app.get('/api/services', services.All);

  app.get('*', pageRenderer);
};

export default routes;
