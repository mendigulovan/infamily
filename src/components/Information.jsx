import React from 'react';

import axios from 'axios';

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
      <ul>
        { this.state.content.map(content => <li>{content.title}</li>)}
      </ul>
    )
  }
}
