import React, { Component } from 'react';
import {
  Button, Container, Form, Grid, Header, Image, Menu, Message, Modal, Segment,
  Visibility
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { createUser, loginUser } from '../../actions/index';

import './style.less';

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
      <Menu fixed='top' inverted size='large'>
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
            <Button as='a' href='api/v1/auth/logout' inverted>Cerrar Sesion</Button>
          </Menu.Item>
          : <Menu.Item className='item'>
            <Modal trigger={<Button as='a' inverted>Iniciar Session</Button>}>
              <Modal.Content>
                <Grid
                  textAlign='center'
                  style={{ height: '100%' }}
                  verticalAlign='middle'>
                  <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                      {' '}Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmitLogin}>
                      <Segment stacked>
                        <Form.Input
                          fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='E-mail address'
                          name='email'
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <Form.Input
                          fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          name='password'
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <Form.Button color='teal' fluid size='large'>Iniciar Sesion</Form.Button>
                      </Segment>
                    </Form>
                    <Message>
                      New to us? <a href='#'>Sign Up</a>
                    </Message>
                    <Button as='a' href='api/v1/auth/google'>Con Google</Button>
                  </Grid.Column>
                </Grid>
              </Modal.Content>
            </Modal>
          </Menu.Item>
      }
      {
        !this.props.auth &&
        <Menu.Item>
          <Modal trigger={<Button as='a' inverted>Sign Up</Button>}>
            <Modal.Content>
              <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Modal.Description>
                      <Header>Crear cuenta</Header>
                    </Modal.Description>
                    <Segment stacked>
                      <Form onSubmit={ this.handleSubmit } size='large'>
                        <Form.Input
                          fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='Name'
                          name='name'
                          value={ this.state.name }
                          onChange={ this.handleChange }
                        />
                        <Form.Input
                          fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='Email'
                          name='email'
                          value={ this.state.email }
                          onChange={ this.handleChange }
                        />
                        <Form.Input
                          fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='Password'
                          name='password'
                          value={ this.state.password }
                          onChange={ this.handleChange
                          }/>
                        <Form.Input
                          fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='Phone'
                          name='phone'
                          value={ this.state.phone }
                          onChange={ this.handleChange }
                        />
                        <Form.Checkbox label='I agree to the Terms and Conditions'/>
                        <Form.Button color='teal' fluid size='large'>Crear</Form.Button>
                      </Form>
                    </Segment>
                </Grid.Column>
              </Grid>
            </Modal.Content>
          </Modal>
        </Menu.Item>
      }
    </Menu.Menu>
  );


  renderMenuItems = () => (
    <Container>
      <Menu.Item as={Link} to='/' active={this.isActive('/')}>Inicio</Menu.Item>
      <Menu.Item as={Link} to='/users' active={this.isActive('/users')}>Galeria</Menu.Item>
      {
        this.props.auth &&
        <Menu.Item as={Link} to='/admins' active={this.isActive('/admins')}>Admins</Menu.Item>
      }
      {this.renderAuthButton()}
    </Container>
  );

  render () {
    const { visible } = this.state;
    return (
      <div id='MenuStyle'>
        { visible && this.renderFixedMenu(visible) }
        <Visibility
          onBottomPassed={ this.showFixedMenu }
          onBottomVisible={ this.hideFixedMenu }
          once={ false }>
          <Segment
            inverted
            textAlign='center'
            style={ { padding : '1em 0em' } }
            className='active-menu'
            vertical>
              { this.renderFixedMenu(visible) }
          </Segment>
        </Visibility>
      </div>
    );
  }
}

function mapStateToProps ({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { createUser, loginUser })(TopMenu);
