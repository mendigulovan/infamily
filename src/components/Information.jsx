import React from 'react';
import '../css/Information.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

export default class Home extends React.Component {
  state = {
    content: []
  }

  render() {
    return (
      <Grid>
        <Gallery direction={"column"} photos={PHOTO_SET} />
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="cat-wrapper">
              <Link to="/fost">
              <h4>Фостерное опекунство</h4>
              </Link>
              <Link to="/opekunstvo">
              <h4>Опекунство и попечительство</h4>
              </Link>
              <Link to="/usynovlenie">
              <h4>Усыновление</h4>
              </Link>
            </Col>
          </Row>
      </Grid>
    )
  }
}

const PHOTO_SET = [
  {
    src: "assets/fost.jpg",
    width: 4,
    height: 3
  },
  {
    src: "assets/usynovlenie.jpg",
    width: 1,
    height: 1
  },
  {
    src: "assets/opekunstvo.jpg",
    width: 3,
    height: 4
  },
  {
    src: "assets/4pic.jpg",
    width: 3,
    height: 4
  }
];
