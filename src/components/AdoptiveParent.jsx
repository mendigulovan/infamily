import React, { Component } from 'react';
import '../css/AdoptiveParent.css';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import Documents from '../components/Documents';
import Information from '../components/Information';
import Test from '../components/Test';
import {AwesomeButton} from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-blue';



export default class Home extends Component {
  constructor( props ){
      super( props )
      this.state = { show : true };
      this.toggleDiv = this.toggleDiv.bind(this)

  }

  toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

    render() {
        return (
          <div>
          <header class="head">
          </header>
      <Grid>
      <div className="menu">
        <Jumbotron>
        <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="cat-wrapper">
          <Image src="assets/circle1.jpg" circle className="main-picture"/>
          </Col>
          </Row>
            <h2>Хотите стать приёмным родителем?</h2>
            <h3>Этот раздел содержит...</h3>
            <button onClick={ this.toggleDiv }>Информация об опекунстве</button>
            <button>Процесс сбора документов</button>
            <button>ТЕСТ Готовы ли вы?</button>
            <br></br>
            { this.state.show && <Information/> }

        </Jumbotron>
        </div>
      </Grid>
      </div>

    )
  }
}
