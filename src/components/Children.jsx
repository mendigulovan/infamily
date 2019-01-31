import React, { Component } from 'react';
import '../css/Information.css';
import { Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class AboutParents extends Component {

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
          <Image src="assets/circle3.jpg" circle className="main-picture"/>
          </Col>
          </Row>
            <h2>О приёмных детях</h2>
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
