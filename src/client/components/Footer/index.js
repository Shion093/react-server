import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

import './style.less';

class Footer extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id='MenuStyle'>
        <Segment inverted vertical style={ { padding : '5em 0em' } }>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={ 3 }>
                  <Header inverted as='h4' content='About'/>
                  <List link inverted>
                    <List.Item as='a'>Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={ 3 }>
                  <Header inverted as='h4' content='Services'/>
                  <List link inverted>
                    <List.Item as='a'>Aguan Caliete</List.Item>
                    <List.Item as='a'>TV</List.Item>
                    <List.Item as='a'>Parqueo</List.Item>
                    <List.Item as='a'>Cocina</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={ 7 }>
                  <Header as='h4' inverted>Cañaveral</Header>
                  <p>Cabinas y Cabañas</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Footer;
