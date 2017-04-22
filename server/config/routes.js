import pageRenderer from '../render/pageRenderer';

const routes = (app) => {
  app.get('*', pageRenderer);
};

export default routes;
