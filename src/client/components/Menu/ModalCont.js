import React from 'react';
import { Button, Grid, Header, Message, Modal } from 'semantic-ui-react';

export default function ModalCont({ buttonText, header, children }) {
  return (
    <Modal trigger={ <Button as='a' inverted>{ buttonText }</Button> }>
      <Modal.Content>
        <Grid
          textAlign='center'
          style={ { height : '100%' } }
          verticalAlign='middle'>
          <Grid.Column style={ { maxWidth : 450 } }>
            <Header as='h2' color='teal' textAlign='center'>
              { ' ' }{ header }
            </Header>
            { children }
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
            <Button as='a' href='api/v1/auth/google'>Con Google</Button>
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  )
}