import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';
import { Jumbotron, Grid, Row, Col, Image, Form, FormControl, FormGroup, ControlLabel,Button } from 'react-bootstrap';
import Carousel from 'nuka-carousel';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

export default class Home extends Component {
    render() {
        return (
          <div className="content">
          <span>InFamily</span>
          <p className="name">Краткое описание сайта</p>
          <div className="slider-list">
            <div className="slider-slide">
            <Carousel>
                    <img width={900} height={650} alt="900x600" src="assets/1.jpg"/>
                    <img width={900} height={650} alt="900x600" src="assets/2.jpeg" />
                    <img width={900} height={650} alt="900x600" src="assets/3.jpg" />
            </Carousel>
            </div>
          </div>

      <Grid>
        <div className="main_content">
        <Jumbotron>
        <div className="menu">
        <div className="text">
          <h2>Заголовок</h2>
          <h3>Краткое описание</h3>
          <h2>Основное меню</h2>
        </div>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle1.jpg" circle className="picture"/>
              <Link to="/adopt">
              <h4>Хотите стать приёмными родителями?</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle2.jpg" circle className="picture"/>
              <Link to="/aboutParents">
              <h4>Вы являетесь приёмным родителем?</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle3.jpg" circle  className="picture"/>
              <Link to="/child">
              <h4>О приёмных детях</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle4.jpg" circle  className="picture"/>
              <Link to="/test">
              <h4>Список специалистов</h4>
              </Link>
            </Col>
          </Row>
              <div className="text">
              <h2>Связь с нами</h2>
              <h3>Краткое описание</h3>
              </div>
              <div className="form">
              <MDBContainer>
              <MDBRow>
              <MDBCol md="10">
              <form>
              <div>
             <MDBInput
                label ="Your name"
                size="lg"
                group
                type="text"
                validate
                error="wrong"
                success="right"


              />
              <MDBInput
                label="Your email"
                size="lg"
                group
                type="email"
                validate
                error="wrong"
                success="right"


              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                size="lg"

              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="blue">
                Send <MDBIcon icon="paper-plane-o" className="ml-1" />
              </MDBBtn>
            </div>
            </form>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
            </div>
            </div>
          </Jumbotron>
          </div>
      </Grid>
    </div>
    )
  }
}
