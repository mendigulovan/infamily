import React, { Component } from 'react';
import '../css/AdoptiveParent.css';
import { Jumbotron, Grid, Row, Col, Image, Button,ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Documents from '../components/Documents';
import Information from '../components/Information';
import Test from '../components/Test';

export default class Home extends Component {
  constructor( props ){
      super( props )
      this.state = {render:''}

  }
  handleClick(compName, e){
         console.log(compName);
         this.setState({render:compName});
     }
     _renderSubComp(){
         switch(this.state.render){
             case 'info': return <Information/>
             case 'docs' : return <Documents/>
             case 'test': return <Test/>
         }
     }


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
          <Image src="assets/circle1.jpg" circle className="main-picture"/>
          </Col>
          </Row>
            <h2>Хотите стать приёмным родителем?</h2>
            <h3>Этот раздел содержит...</h3>
            <div className="btn-wrapper">
              <button type="button" class="btn btn-flat btn-lg" onClick={this.handleClick.bind(this, 'info')}>Информация<br></br> об опекунстве</button >
              <button type="button" class="btn btn-flat btn-lg" onClick={this.handleClick.bind(this, 'docs')}>Процесс сбора<br></br> документов</button >
              <button type="button" class="btn btn-flat btn-lg" onClick={this.handleClick.bind(this, 'test')}>ТЕСТ<br></br> Готовы ли Вы?</button >

              {this._renderSubComp()}
            </div>
        </Jumbotron>
        </div>
      </Grid>
      </div>

    )
  }
}
