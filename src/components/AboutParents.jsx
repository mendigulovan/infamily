import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AboutParents.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'nuka-carousel';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Home extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
      return (
        <div>

          <div className="slider-list">
            <div className="slider-slide">
              <h1>InFamily</h1>
                <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
            </div>
          </div>
          <Grid>
            <Jumbotron>
              <h2>О приемных родителях</h2>
              <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="cat-wrapper">
                  <Image src="https://flytothesky.ru/wp-content/uploads/2017/06/98687-696x392.jpg" circle className="picture"/>
                  <Link to="/info">
                  <h3>Базовые советы по решению конфликтов</h3>
                  </Link>
                </Col>
                <Col xs={12} sm={4} className="cat-wrapper">
                  <Image src="http://linesa.ru/uploads/posts/2016-03/1457265800_1.jpg" circle className="picture"/>
                  <Link to="/docs">
                  <h3>Как сохранить взаимопонимание</h3>
                  </Link>
                </Col>
                <Col xs={12} sm={4} className="cat-wrapper">
                  <Image src="http://www.garmoniazhizni.com/wp-content/uploads/2015/11/vzaimoponimanie-v-seme.jpg" circle className="picture"/>
                  <Link to="/test">
                  <h3>Досуг"</h3>
                  </Link>
                </Col>
              </Row>
            </Jumbotron>
          </Grid>
        </div>
    )
  }
}
