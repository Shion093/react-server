import React, { Component } from 'react';
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TopMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  hideFixedMenu = () => this.setState({ visible : false });
  showFixedMenu = () => this.setState({ visible : true });
  isActive = (path) => this.props.currentRoute === path;

  renderFixedMenu = (visible) => {
    if (visible) return (
      <Menu fixed='top' size='large'>
        {this.renderMenuItems()}
      </Menu>
    );
    return (
      <Container>
        <Menu inverted pointing secondary size='large'>
          {this.renderMenuItems()}
        </Menu>
      </Container>
    );
  };

  renderAuthButton = () => (
    <Menu.Menu position='right'>
      {
        this.props.auth
          ? <Menu.Item className='item'>
            <Button as='a' href='/api/logout'>Log out</Button>
          </Menu.Item>
          : <Menu.Item className='item'>
            <Button as='a' href='/api/auth/google'>Log in</Button>
          </Menu.Item>
      }
      {
        !this.props.auth &&
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      }
    </Menu.Menu>
  );


  renderMenuItems = () => (
    <Container>
      <Menu.Item as={Link} to='/' active={this.isActive('/')}>Home</Menu.Item>
      <Menu.Item as={Link} to='/users' active={this.isActive('/users')}>Users</Menu.Item>
      {
        this.props.auth &&
        <Menu.Item as={Link} to='/admins' active={this.isActive('/admins')}>Admins</Menu.Item>
      }
      {this.renderAuthButton()}
    </Container>
  );

  render() {
    const { visible } = this.state;
    return (
      <div>
        { visible && this.renderFixedMenu(visible) }
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>
          <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical>
            { this.renderFixedMenu(visible) }
          </Segment>
        </Visibility>
      </div>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(TopMenu);
