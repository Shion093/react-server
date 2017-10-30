import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
`;
}
