import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
       <div>{ renderRoutes(Routes) }</div>
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
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
      </body>
      <script src="bundle.js"></script>
    </html>
`;
}
