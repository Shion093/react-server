import express from 'express';

const app = express();

import renderHtml from './helpers/render';

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderHtml(req));
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});
