import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import proxy from 'express-http-proxy';

import renderHtml from './helpers/render';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

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
