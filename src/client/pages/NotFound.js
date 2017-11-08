import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <Segment
      inverted
      textAlign='center'
      style={ { minHeight : '100vh', padding : '1em 0em' } }
      vertical>
      <Container text>
        <Header
          as='h1'
          content='Page not found'
          inverted
          style={ { fontSize : '4em', fontWeight : 'normal', marginBottom : 0, marginTop : '3em' } }
        />
        <Header
          as='h2'
          content='Return to home'
          inverted
          style={ { fontSize : '1.7em', fontWeight : 'normal' } }
        />
        <Button primary size='huge' as={ Link } to='/'>
          Home
          <Icon name='right arrow'/>
        </Button>
      </Container>
    </Segment>
  )
};

export default {
  component : NotFound,
};
