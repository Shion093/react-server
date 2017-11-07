import React from 'react';
import Home from './pages/Home';
import Users from './pages/Users';
import Users2 from './pages/UsersList';

export default [
  {
    ...Home,
    path     : '/',
    exact     : true,
  },
  {
    ...Users2,
    path     : '/users',
    exact     : true,
  }
]