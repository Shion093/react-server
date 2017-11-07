import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
       <link rel="stylesheet" href="main.css">
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
`;
}
