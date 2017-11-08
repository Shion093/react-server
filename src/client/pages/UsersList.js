import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';

// Actions
import { fetchUsers } from '../actions/index';

class HomepageLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentWillMount () {
    if (_.isEmpty(this.props.users)) {
      this.props.fetchUsers();
    }
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render () {
    return (
      <div>
        Here's big list
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { users : state.users };
}

function loadData (store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component : connect(mapStateToProps, { fetchUsers })(HomepageLayout),
}
