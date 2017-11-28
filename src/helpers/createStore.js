import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/reducers';

export default (req) => {
  const userAgent = req.headers['user-agent'];
  console.log(userAgent);

  const axiosServer = axios.create({
    baseURL : 'http://localhost:7777/v1',
    headers : { cookie : req.get('cookie') || ''}
  });
  const store = createStore(
    reducers,
    {
      users : {
        userAgent
      }
    },
    applyMiddleware(thunk.withExtraArgument(axiosServer))
  );
  return store;
}