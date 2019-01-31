import React, { Component } from 'react';
import '../css/Documents.css';
import Signup from '../components/Signup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";



export default class Docs extends React.Component {

  state = {
    name: '',
    password: '',
    phone: '',

  };

  handleFullNameChange = event => {this.setState({ name: event.target.value })}
  handlePasswordChange = event => {this.setState({ password: event.target.value })}
  handleMobileChange = event => {this.setState({ phone: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.post('https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/documents/',
      { name: this.state.name, password: this.state.password, phone: this.state.phone },)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div className="sign_in">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="7">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header grey lighten-1 rounded">
                <h3 className="white-text">
                  Войти или зарегистрироваться
                </h3>
              </MDBCardHeader>
              <form onSubmit={this.handleSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.name}
                    onChange={this.handleFullNameChange}
                  />
                  <MDBInput
                    label="Type your password"
                    group
                    type="password"
                    validate
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                  <MDBInput
                    label="Type your phone number"
                    group
                    type="text"
                    validate
                    value={this.state.phone}
                    onChange={this.handleMobileChange}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                  class="btn btn-primary btn-lg wave" 
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                <Link to="/signup">
                <p>Зарегистрироваться</p>
                </Link>
                  <p>Forgot Password?</p>

                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    )
  }
}
