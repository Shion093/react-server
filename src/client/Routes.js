import React from 'react';
import App from './App';
import Home from './pages/Home';
import Users from './pages/Users';
import Users2 from './pages/UsersList';

export default [
  {
    ...App,
    routes : [
      {
        ...Users2,
        path     : '/',
        exact     : true,
      },
      {
        ...Users,
        path : '/users',
      },
    ]
  },
]