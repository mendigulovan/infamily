import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdoptiveParent.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Хотите стать приёмным родителем?</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="cat-wrapper">
              <Image src="assets/image-1.jpg" circle className="picture"/>
              <Link to="/info">
              <h3>Информация об усыновлении</h3>
              </Link>
            </Col>
            <Col xs={12} sm={4} className="cat-wrapper">
              <Image src="assets/image-3.jpg" circle className="picture"/>
              <Link to="/docs">
              <h3>Процесс сбора документов</h3>
              </Link>
            </Col>
            <Col xs={12} sm={4} className="cat-wrapper">
              <Image src="assets/image-2.jpg" circle className="picture"/>
              <Link to="/test">
              <h3>Тест: "Готовы ли вы стать родителем?"</h3>
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    )
  }
}
