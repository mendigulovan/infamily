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
              <p>Фостерное опекунство</p>
              <Image src="assets/fost.jpg" className="pic"/>
              </Link>
            </Col>
            <Col xs={3}>
              <Link to="/usynovlenie">
              <p>Усыновление</p>
              <Image src="assets/usynovlenie.jpg" className="pic2"/>
              </Link>
            </Col>
            <Col xs={5}>
              <Link to="/opekunstvo">
              <p>Опекунство и попечительство</p>
              <Image src="assets/opekunstvo.jpg"  className="pic3"/>
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
