import path from 'path';

const routes = (app) => {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });
}

export default routes;