import 'babel-polyfill';
import express from 'express';

const app = express();

import renderHtml from './helpers/render';
import createStore from './helpers/createStore';

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderHtml(req, store));
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});
