import React, { Component } from 'react';
import { Button, Container, Form, Header, Image, Menu, Modal, Segment, Visibility } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { createUser, loginUser } from '../actions';

class TopMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      phone : '',
      password : '',
    }
  }

  hideFixedMenu = () => this.setState({ visible : false });
  showFixedMenu = () => this.setState({ visible : true });
  isActive = (path) => this.props.currentRoute === path;
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.props.createUser(this.state);
  }

  handleSubmitLogin = () => {
    this.props.loginUser(this.state);
  }

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
            <Button as='a' href='api/v1/auth/logout'>Log out</Button>
          </Menu.Item>
          : <Menu.Item className='item'>
            <Modal trigger={<Button as='a'>Log In</Button>}>
              <Modal.Content image>
                <Modal.Description>
                  <Header>Iniciar Sesion</Header>
                </Modal.Description>
                <Form onSubmit={this.handleSubmitLogin}>
                  <Form.Group widths='equal'>
                    <Form.Input placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
                    <Form.Input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Button content='Submit' />
                </Form>
                <Button as='a'  href='api/v1/auth/google'>With Google</Button>
              </Modal.Content>
            </Modal>
          </Menu.Item>
      }
      {
        !this.props.auth &&
        <Menu.Item>`
          <Modal trigger={<Button as='a' primary>Sign Up</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} />
                  <Form.Input placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
                  <Form.Input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
                  <Form.Input placeholder='Phone'  name='phone' value={this.state.phone} onChange={this.handleChange} />
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button content='Submit' />
              </Form>
            </Modal.Content>
          </Modal>
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

export default connect(mapStateToProps, { createUser, loginUser })(TopMenu);
