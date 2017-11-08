import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';

// Actions
import { fetchAdmins } from '../actions';

// Components
import requireAuth from '../components/hocs/requiereAuth';

class AdminsList extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentWillMount () {
    if (_.isEmpty(this.props.users)) {
      this.props.fetchAdmins();
    }
  }

  renderUsers() {
    return _.map(this.props.admins, admin => {
      return <li key={admin.id}>{admin.name}</li>
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
  return { admins : state.admins };
}

function loadData (store) {
  return store.dispatch(fetchAdmins());
}

export default {
  loadData,
  component : connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
}
