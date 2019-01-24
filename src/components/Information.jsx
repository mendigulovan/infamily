import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Information.css';
import {Grid, Row, Col, Image } from 'react-bootstrap';

export default class Info extends React.Component {

  constructor(props){
        super(props);


    }

  render() {
    return (
      <Grid>
      <div className="wrap">
          <Row around="xs">
            <Col xs={5}>
              <Link to="/fost">
              <div class="img-wrap">
              <h3>Фостерное опекунство</h3>
              <Image src="assets/fost.jpg" className="pic"/>
              </div>
              </Link>
            </Col>
            <Col xs={3}>
              <Link to="/usynovlenie">
              <div class="img-wrap">
              <h3>Усыновление</h3>
              <Image src="assets/usynovlenie.jpg" className="pic2"/>
              </div>
              </Link>
            </Col>
            <Col xs={5}>
              <Link to="/opekunstvo">
              <div class="img-wrap">
              <h3>Опекунство и попечительство</h3>
              <Image src="assets/opekunstvo.jpg"  className="pic3"/>
              </div>
              </Link>
            </Col>
            <Col xs={3}>
              <Link to="/">
              <Image src="assets/4pic.jpg"  className="pic"/>
              </Link>
            </Col>
          </Row>
      </div>

      </Grid>

    )
  }
}
