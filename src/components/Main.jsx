import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

export default class Home extends Component {
    render() {
        return (
          <div>
          <div className="slider-list">
            <div className="slider-slide">
                  <Carousel>
                    <img height={550} alt="500x500" src="assets/1.jpg" />
                    <img height={550} alt="500x500" src="assets/2.jpeg" />
                    <img height={550} alt="500x500" src="assets/3.jpg" />
                  </Carousel>
            </div>
          </div>
      <div className="menu">
      <Grid>
        <Jumbotron>
          <h2>Заголовок</h2>
          <h3>Краткое описание</h3>
          <h2>Основное меню</h2>
          <Row className="show-grid text-center">
            <Col xs={2} sm={3} className="cat-wrapper">
              <Image src="assets/image-1.jpg" circle className="picture"/>
              <Link to="/adopt">
              <h4>Хотите стать приёмными родителями?</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/image-3.jpg" circle className="picture"/>
              <Link to="/docs">
              <h4>Вы являетесь приёмным родителем?</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/image-2.jpg" circle className="picture"/>
              <Link to="/test">
              <h4>О приёмных детях</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/image-2.jpg" circle className="picture"/>
              <Link to="/test">
              <h4>Список специалистов</h4>
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
      </div>
      </div>
    )
  }
}
