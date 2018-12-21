import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdoptiveParent.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

export default class Home extends Component {
    render() {
        return (
          <div>
          <div class="page-header">
          <img width={1350} height={600} alt="900x600" src="assets/1.jpg"/>
          </div>
          <Col xs={12} sm={4} className="cat-wrapper">
            <Image src="assets/circle1.jpg" circle className="main-picture"/>
          </Col>
      <Grid>
        <Jumbotron className="second-page">
          <h2>Хотите стать приёмным родителем?</h2>
        </Jumbotron>
      </Grid>
      </div>
    )
  }
}
