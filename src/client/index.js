import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Routes from './Routes';
import reducers from './reducers';

const axiosClient = axios.create({
  baseURL : '/api/v1',
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosClient)),
);

ReactDOM.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <div>{ renderRoutes(Routes) }</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
