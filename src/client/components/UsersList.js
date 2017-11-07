import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions';

class HomepageLayout extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  componentWillMount () {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(  user => {
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

export default connect(mapStateToProps, { fetchUsers })(HomepageLayout)
