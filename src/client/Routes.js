import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Users2 from './components/UsersList';

export default () => {
  return (
    <div>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/users'} component={Users}/>
      <Route exact path={'/users2'} component={Users2}/>
    </div>
  )
}