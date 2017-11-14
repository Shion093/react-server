import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

import './style.less';

import bathImg from './cabin-bath.jpg';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    const { visible } = this.state;

    return (
      <div id='Home'>
        <Segment
            inverted
            textAlign='center'
            style={{minHeight : 700, padding : '1em 0em' }}
            className='title'
            vertical>
            <Container text>
              <Header
                as='h1'
                inverted
                style={{ fontSize : '4em', fontWeight : 'normal', marginBottom : 0, marginTop : '3em' }}>
                Cabinas y Cabanas
              </Header>
              <Header
                as='h1'
                inverted
                style={{ fontSize : '6em', marginBottom : 0 ,marginTop : 0}}>
               Canaveral
              </Header>
              <Header
                as='h2'
                content='Lugar perfecto para descansar'
                inverted
                style={{ fontSize : '1.7em', fontWeight : 'normal' }}
              />
            </Container>
          </Segment>


        <Segment style={{ padding : '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize : '2em' }}>Cabinas y Cabanas con todas las comodidades</Header>
                <p style={{ fontSize : '1.33em' }}>
                  Nuestras cabinas cuentan con todos los servicios y a 10 minutos del centro de San Isidro de El General
                </p>
                <Header as='h3' style={{ fontSize : '2em' }}>Amplio Parqueo</Header>
                <p style={{ fontSize : '1.33em' }}>
                  Le ofrecemos un amplio y seguro parqueo.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src={bathImg}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize : '2em' }}>Aire Acondicionado</Header>
                <p style={{ fontSize : '1.33em' }}>
                  Aire fresco siempre.
                </p>
                <Header as='h3' style={{ fontSize : '2em' }}>WiFi</Header>
                <p style={{ fontSize : '1.33em' }}>
                 Contamos con internet de alta velocidad para que puedas disfrutar de tu contenido favorito.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src={bathImg}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding : '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom : '5em', paddingTop : '5em' }}>
                <Header as='h3' style={{ fontSize : '2em' }}>"What a Company"</Header>
                <p style={{ fontSize : '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom : '5em', paddingTop : '5em' }}>
                <Header as='h3' style={{ fontSize : '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize : '1.33em' }}>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg'/>
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding : '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize : '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize : '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin : '3em 0em', textTransform : 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>

            <Header as='h3' style={{ fontSize : '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize : '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding : '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About'/>
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services'/>
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default {
  component : Home
};
