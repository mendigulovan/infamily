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
            <Col xs={12} sm={3} className="cat-wrapper">
              <h4>Тест</h4>
            </Col>
          </Row>
      </Grid>
    )
  }
}
