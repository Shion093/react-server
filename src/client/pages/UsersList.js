import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
import { Helmet } from 'react-helmet';

// Actions
import { fetchUsers } from '../actions';

class HomepageLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentWillMount () {
    if (_.isEmpty(this.props.users)) {
      // this.props.fetchUsers();
    }
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head () {
    return (
      <Helmet>
        <title>{`(${this.props.users.length})  Users App`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  render () {
    return (
      <div>
        { this.head() }
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
  // return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component : connect(mapStateToProps, { fetchUsers })(HomepageLayout),
}
