import React, { Component } from 'react';
import '../css/Information.css';
import { Jumbotron, Grid, Row, Col, Image, Button,ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Documents from '../components/Documents';
import Information from '../components/Information';
import Test from '../components/Test';

export default class AboutParents extends Component {
  constructor( props ){
      super( props )


  }


    render() {
        return (
          <div className="content">
          <header class="head">
          </header>
      <Grid>
      <div className="menu">
        <Jumbotron>
        <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="cat-wrapper">
          <Image src="assets/circle2.jpg" circle className="main-picture"/>
          </Col>
          </Row>
            <h2>Вы являетесь приёмным родителем?</h2>
            <h3>Этот раздел содержит...</h3>
            <div className="wrap-2">
                <Row around="xs">
                  <Col xs={4}>
                    <Link to="/fost">

                    <Image src="assets/konflikt.jpg" className="pic"/>
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <Link to="/usynovlenie">

                    <Image src="assets/vzaimoponimanie.jpg" className="pic"/>
                    </Link>
                  </Col>
                  <Col xs={8}>
                    <Link to="/opekunstvo">

                    <Image src="assets/dosug.jpg" className="pic4"/>
                    </Link>
                  </Col>
                </Row>
            </div>

        </Jumbotron>
        </div>
      </Grid>
      </div>

    )
  }
}
