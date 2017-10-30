import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

// Components
import Home from './client/components/Home';

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});
