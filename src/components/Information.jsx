import React from 'react';
import axios from 'axios';
import Carousel from 'nuka-carousel';
import '../css/Information.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';

export default class PersonList extends React.Component {
  state = {
    content: []
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/categories/4/`)
      .then(res => {
        const content = res.data;
        this.setState({ content });
      })
  }

  render() {
    return (
      <div className="slider-list">
        <div className="slider-slide">
              <Carousel>
                <img height={500} alt="300x500" src="assets/1.jpg" />
                <img height={500} alt="300x500" src="assets/2.jpg" />
                <img height={500} alt="300x500" src="assets/3.jpg" />
              </Carousel>
        </div>
      </div>
    /*  <ul>
        { this.state.content.map(content => <li>{content.title}</li>)}
      </ul>*/

    )
  }
}
