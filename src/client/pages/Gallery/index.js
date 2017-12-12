import React, { Component } from 'react';
import {
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
      autoplaySpeed  : 5000,
      draggable      : true,
      pauseOnHover   : false,
    };
    return (
      <div id='Home'>
        <Segment>
          <Slider { ...settings }>
            {
              _.map(_.range(1, 15), (i) => {
                return (
                  <div key={_.uniqueId(i)} style={ { minHeight : '100%', borderRadius : 0, border : 'none', width : '100%', textAlign : 'center' }}>
                    <img src={`${baseUrl}/slider${i}.jpeg`} alt=""/>
                  </div>
                )
              })
            }
          </Slider>
        </Segment>
      </div>
    );
  }
}

export default {
  component : Gallery
};
