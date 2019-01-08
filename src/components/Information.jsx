import React from 'react';
import '../css/Information.css';
import {Grid,Row,Col} from 'react-bootstrap';

export default class Home extends React.Component {
  state = {
    content: []
  }

  render() {
    return (
        <div className="wrapper">
          <div class="row">
		      <div class="col-lg-3 col-sm-4 col-6">
			    <div class="thumbnail img-responsive">
           <a href="/fost">Фостерное опекунство<img src="assets/fost.jpg"/></a>
           <a href="/usynovlenie">Усыновление<img src="assets/usynovlenie.jpg"/></a>
           <a href="/opekunstvo">Опекунство и попечительство<img src="assets/opekunstvo.jpg"/></a>
           <img src="assets/4pic.jpg"/>
          </div>
          </div>
          </div>
      </div>
    )
  }
}
