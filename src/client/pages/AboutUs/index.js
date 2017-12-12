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

class AboutUs extends Component {
  constructor() {
    super();
  }



  render() {
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
              Sobre Nosotros
            </Header>
          </Container>
        </Segment>


        <Segment style={ { padding : '8em 0em' } } vertical>
          <Container>
            <p>


              A solo 3 horas de San José, en la zona sur de Costa Rica, se encuentra Cabinas Cañaveral, Cabinas ubicadas
              en el corazón de Palmares, PZ; pueblo pequeño , rodeado de exuberante flora y fauna, de hermosas playas de
              a solo 30 minutos, donde los cocotales, árboles de uva de playa y gigantescos almendros conforman una franja de
              intensos verdores; de frente, las aguas cálidas, cristalinas y tranquilas del Pacifico, configuran el lugar
              perfecto para la diversión, la aventura, el descanso, y el disfrutes de las bellezas naturales. Al reunir
              todas estas características naturales. Además de las riqueza natural se encuentra un
              verdadero tesoro cultural, su gente principalmente prometen
              un lugar tranquilo y relajado, donde sus habitantes le ofrecen su amistad y el disfrutar de la deliciosa
              gastronomía.

              En este verdadero paraíso se encuentra Cabinas y Cabañas Cañaveral, donde podra descansar y disfrutar de la naturaleza.

            </p>
          </Container>


        </Segment>

      </div>
    );
  }
}

export default {
  component : AboutUs,
}