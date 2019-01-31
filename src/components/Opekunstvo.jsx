import React from 'react';
import axios from 'axios';
import '../css/Information.css';
import { Jumbotron, Grid, Row } from 'react-bootstrap';

export default class Home extends React.Component {
  state = {
    content: []
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/categories/5/`)
      .then(res => {
        const content = res.data;
        this.setState({ content });
      })
  }

  render() {
    return (
      <div>
      <header class="head">
      </header>
  <Grid>
  <div className="main_content">
    <Jumbotron>
    <Row className="show-grid text-center">
        <h2>Опекунство</h2>
    </Row>
        <ul>
          { this.state.content.map(content => <div>{content.content}</div>)}
        </ul>


    </Jumbotron>
    </div>
  </Grid>
</div>
    )
  }
}
