import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

import './style.less';

class Footer extends Component {
  constructor (props) {
    super(props);
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
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={ 3 }>
                  <Header inverted as='h4' content='Services'/>
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={ 7 }>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
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
