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
              <div class="pic1">
              <h3>Фостерное опекунство</h3>
              </div>
              </Link>
            </Col>
            <Col xs={3}>
              <Link to="/usynovlenie">
              <div class="pic2">
              <h3>Усыновление</h3>
              </div>
              </Link>
            </Col>
            <Col xs={5}>
              <Link to="/opekunstvo">
              <div class="pic3">
              <h3>Опекунство и попечительство</h3>
              </div>
              </Link>
            </Col>
            <Col xs={3}>
              <Link to="/">
              <div class="pic4"></div>
              </Link>
            </Col>
          </Row>
      </div>

      </Grid>

    )
  }
}
