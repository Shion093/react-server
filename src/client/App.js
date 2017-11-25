import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import Menu from './components/Menu';
import Footer from './components/Footer';
import { fetchCurrentUser } from './actions';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Menu currentRoute={this.props.location.pathname}/>
        <div>
          { renderRoutes(this.props.route.routes) }
        </div>
        <Footer />
      </div>
    )
  }
}

export default {
  component : App,
  loadData  : ({ dispatch }) => dispatch(fetchCurrentUser()),
};
