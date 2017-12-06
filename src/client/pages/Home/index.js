import React, { Component } from 'react';
import {
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

import './style.less';

import bathImg from './cabin-bath.jpg';

class Home extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
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
              Cabinas y Cabanas
            </Header>
            <Header
              as='h1'
              inverted
              style={ { fontSize : '6em', marginBottom : 0, marginTop : 0 } }>
              Canaveral
            </Header>
            <Header
              as='h2'
              content=''
              inverted
              style={ { fontSize : '1.7em', fontWeight : 'normal' } }
            />
          </Container>
        </Segment>


        <Segment style={ { padding : '8em 0em' } } vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Card>
                  <Image src={ bathImg }/>
                  <Card.Content>
                    <Card.Header>Cabina</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user'/>
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src={ bathImg }/>
                  <Card.Content>
                    <Card.Header>Cabana</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user'/>
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src={ bathImg }/>
                  <Card.Content>
                    <Card.Header>Cabana</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user'/>
                      10 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={ 6 }>
                <Header as='h3' style={ { fontSize : '2em' } }>Aire Acondicionado</Header>
                <p style={ { fontSize : '1.33em' } }>
                  Aire fresco siempre.
                </p>
                <Header as='h3' style={ { fontSize : '2em' } }>WiFi</Header>
                <p style={ { fontSize : '1.33em' } }>
                  Contamos con internet de alta velocidad para que puedas disfrutar de tu contenido favorito.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={ 6 }>
                <Image
                  bordered
                  rounded
                  size='large'
                  src={ bathImg }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={ { padding : '0em' } } vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={ { paddingBottom : '5em', paddingTop : '5em' } }>
                <Header as='h3' style={ { fontSize : '2em' } }>Canaveral</Header>
                <p style={ { fontSize : '1.33em' } }>Mejores cabinas de la zona sur</p>
              </Grid.Column>
              <Grid.Column style={ { paddingBottom : '5em', paddingTop : '5em' } }>
                <Header as='h3' style={ { fontSize : '2em' } }>Nuestros clientes nos respaldan</Header>
                <p style={ { fontSize : '1.33em' } }>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg'/>
                  <b>Nancy</b> Un lugar muy tranquilo y seguro
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default {
  component : Home
};
