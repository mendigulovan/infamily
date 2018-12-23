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
          <img width={1360} height={600} alt="900x600" src="assets/1.jpg"/>
          </div>
      <Grid>
        <Jumbotron className="second-page">
        <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="cat-wrapper">
          <Image src="assets/circle1.jpg" circle className="main-picture"/>
          </Col>
          </Row>
            <h2>Хотите стать приёмным родителем?</h2>
            <h3>Этот раздел содержит...</h3>

              <Link to="/info">
              <h3>Информация об усыновлении/опекунстве</h3>
              </Link>
              <Link to="/docs">
              <h3>Процесс сбора документов</h3>
              </Link>
              <Link to="/test">
              <h3>Тест:готов ли я стать приёмным родителем</h3>
              </Link>
        </Jumbotron>
      </Grid>
      </div>
    )
  }
}
