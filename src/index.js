import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderHtml from './helpers/render';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const routesPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(routesPromises).then(() => {
    res.send(renderHtml(req, store));
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});
