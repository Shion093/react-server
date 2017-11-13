import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import renderHtml from './helpers/render';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();

app.use('/api', proxy('http://localhost:7777/v1'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const routesPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if (promise) return new Promise((resolve, reject) =>
      promise.then(resolve).catch(resolve)
    );
    return null;
  });

  Promise.all(routesPromises).then(() => {
    const context = {};
    const content = renderHtml(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});
