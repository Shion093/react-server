import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

// Routes
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
       <div>{ renderRoutes(Routes) }</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <link rel="stylesheet" href="bundle.css">
       <link rel="stylesheet" href="vendor.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
      </body>
      <script src="vendor.js"></script>
      <script src="bundle.js"></script>
    </html>
`;
}
