import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  Image,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { createUser, loginUser } from '../../actions/index';

import './style.less';
import ModalCont from './ModalCont';

class TopMenu extends Component {
  constructor () {
    super();
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
  };

  handleSubmitLogin = () => {
    this.props.loginUser(this.state);
  };

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

  renderLogin = () => {
    return (
      <ModalCont { ...{ buttonText : 'Iniciar Sesion', header : 'Inicio de Sesion' } }>
        <Form size='large' onSubmit={ this.handleSubmitLogin }>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              value={ this.state.email }
              onChange={ this.handleChange }
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              value={ this.state.password }
              onChange={ this.handleChange }
            />
            <Form.Button color='teal' fluid size='large'>Iniciar Sesion</Form.Button>
          </Segment>
        </Form>
      </ModalCont>
    )
  }

  renderSignUp = () => {
    return (
      <ModalCont {...{ buttonText : 'Crear Cuenta', header : 'Crear Cuenta'}}>
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
      </ModalCont>
    )
  }

  renderAuthButton = () => {
    if (this.props.auth) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item className='item'>
            <Image avatar src={this.props.auth.picture} />
            <Button as='a' href='api/v1/auth/logout' inverted>Cerrar Sesion</Button>
          </Menu.Item>
        </Menu.Menu>
      )
    }
    return (
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          { this.renderLogin() }
        </Menu.Item>
        <Menu.Item>
          { this.renderSignUp() }
        </Menu.Item>
      </Menu.Menu>
    )
  }

  renderMenuItems = () => (
    <Container>
      <Menu.Item as={Link} to='/' active={this.isActive('/')}>Inicio</Menu.Item>
      <Menu.Item as={Link} to='/galeria' active={this.isActive('/galeria')}>Galeria</Menu.Item>
      { this.props.auth && <Menu.Item as={Link} to='/admins' active={this.isActive('/admins')}>Admins</Menu.Item> }
      { this.renderAuthButton() }
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
