import React, { Component } from 'react';
import {
  Card,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

import './style.less';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions';
import requireAuth from '../../components/hocs/requiereAuth';

class Contact extends Component {
  constructor () {
    super();
    this.state = {
      name : '',
      email : '',
      phone : '',
      people : '',
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleChange2 = (e, { value }) => this.setState({ value });

  handleSubmit = () => {
    this.props.sendEmail(this.state);
  }


  render () {
    const { value } = this.state;
    return (
      <div id='Home'>
        <Segment
          inverted
          textAlign='center'
          style={ { minHeight : 700, padding : '1em 0em' } }
          className='title'
          vertical>
          <Container text>
            <Header
              as='h1'
              inverted
              style={ { fontSize : '4em', fontWeight : 'normal', marginBottom : 0, marginTop : '3em' } }>
             Reservar
            </Header>
          </Container>
        </Segment>


        <Segment style={ { padding : '8em 0em' } } vertical>
          <Container>
            <Form onSubmit={ this.handleSubmit } size='large'>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Nombre'
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
                placeholder='Telefono'
                name='phone'
                value={ this.state.phone }
                onChange={ this.handleChange }
              />
              <Form.Group inline name='people'>
                <label>Personas</label>
                <Form.Radio label='1' value='1' name='people' checked={value === '1'} onChange={this.handleChange2} />
                <Form.Radio label='2' value='2' name='people' checked={value === '2'} onChange={this.handleChange2} />
                <Form.Radio label='3' value='3' name='people' checked={value === '3'} onChange={this.handleChange2} />
                <Form.Radio label='4' value='4' name='people' checked={value === '4'} onChange={this.handleChange2} />
              </Form.Group>
              <Form.Button color='teal' fluid size='large'>Enviar</Form.Button>
            </Form>
          </Container>


        </Segment>

      </div>
    );
  }
}

export default {
  component : connect(null, { sendEmail })(Contact),
}