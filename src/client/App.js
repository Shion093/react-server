import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import TopMenu from './components/Menu/index';
import { fetchCurrentUser } from './actions';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <TopMenu currentRoute={this.props.location.pathname}/>
        <div>
          { renderRoutes(this.props.route.routes) }
        </div>
      </div>
    )
  }
}

export default {
  component : App,
  loadData  : ({ dispatch }) => dispatch(fetchCurrentUser()),
};
