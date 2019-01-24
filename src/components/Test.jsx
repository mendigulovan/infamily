import React from 'react';
import '../css/Information.css';
import { Grid, Row, Col } from 'react-bootstrap';


export default class Home extends React.Component {
  state = {
    content: []
  }

  render() {
    return (
      <Grid>
          <Row className="show-grid text-center">
            <Col>
            </Col>
          </Row>
          <Row>
          <Col sm={{ size: 'auto', offset: 1 }}></Col>
          <Col sm={{ size: 'auto', offset: 1 }}></Col>
        </Row>
      </Grid>
    )
  }
}
