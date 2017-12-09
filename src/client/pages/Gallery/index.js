import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import _ from 'lodash';

import './style.less';

import Slider from 'react-slick';

const baseUrl = 'https://dz0tywc7nnb41.cloudfront.net/slider';

class Gallery extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    const settings = {
      // customPaging: (i) => {
      //   return <a><img src={`${baseUrl}/slider${i+1}.jpeg`}/></a>
      // },
      dots           : true,
      infinite       : true,
      speed          : 500,
      slidesToShow   : 1,
      slidesToScroll : 1,
      arrows         : false,
      autoplay       : true,
      autoplaySpeed  : 2000,
    };
    return (
      <div id='Home'>
        <Segment style={ { padding : 0, borderRadius : 0, border : 'none' } }>
          <Slider { ...settings }>
            {
              _.map(_.range(1, 15), (i) => {
                return (
                  <div key={_.uniqueId(i)} style={ { minHeight : '100%', borderRadius : 0, border : 'none' }}>
                    <img src={`${baseUrl}/slider${i}.jpeg`} alt=""/>
                  </div>
                )
              })
            }

            {/*<div><Segment style={ { minHeight : '100%', borderRadius : 0, border : 'none' } } className='title'/></div>*/}
          </Slider>
        </Segment>
        <Segment style={ { padding : '0em' } } vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={ { paddingBottom : '5em', paddingTop : '5em' } }>
                <Header as='h3' style={ { fontSize : '2em' } }>"What a Company"</Header>
                <p style={ { fontSize : '1.33em' } }>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={ { paddingBottom : '5em', paddingTop : '5em' } }>
                <Header as='h3' style={ { fontSize : '2em' } }>"I shouldn't have gone with their competitor."</Header>
                <p style={ { fontSize : '1.33em' } }>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg'/>
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={ { padding : '8em 0em' } } vertical>
          <Container text>
            <Header as='h3' style={ { fontSize : '2em' } }>Breaking The Grid, Grabs Your Attention</Header>
            <p style={ { fontSize : '1.33em' } }>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={ { margin : '3em 0em', textTransform : 'uppercase' } }
            >
              <a href='#'>Case Studies</a>
            </Divider>

            <Header as='h3' style={ { fontSize : '2em' } }>Did We Tell You About Our Bananas?</Header>
            <p style={ { fontSize : '1.33em' } }>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default {
  component : Gallery
};
