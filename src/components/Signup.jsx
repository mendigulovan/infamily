import React, { Component } from 'react';
import '../css/Documents.css';
import Signup from '../components/Signup';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

  constructor(props){
        super(props);
        this.send = this.send.bind(this);
    }
    state = {
    name: "",
    email: "",
    phone: "",
    id : ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ name: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ phone: event.target.value });
    this.setState({ id: event.target.value });
  };

  send(e){
     e.preventDefault();
     const logindata={
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      id : this.state.id
     }
     axios.post('https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/documents/', logindata )
     .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
     console.log("SignUp successfull");
     }

     else{
     console.log(" ");
         }
    })
    .catch(function (error) {
    console.log(error);
    });
    }

  render() {
    return (
      <div className="form-registration">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
          <MDBCardHeader className="form-header grey lighten-1 rounded">
            <h3 className="white-text">
              Регистрация
            </h3>
          </MDBCardHeader>
          <div>
      <form>
        <MDBRow>
          <MDBCol md="12">
            <MDBInput
              value={this.state.name}
              name="name"
              icon="user"
              onChange={this.changeHandler}
              type="text"
              id="materialFormRegisterNameEx"
              label="Your name"
              required
            />
          </MDBCol>
          <MDBCol md="12">
            <MDBInput
              value={this.state.email}
              onChange={this.changeHandler}
              type="email"
              id="materialFormRegisterConfirmEx3"
              name="email"
              label="Your Email address"
              icon="envelope"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
              <MDBInput
                value={this.state.phone}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="phone"
                icon="phone"
                label="Phone"
                required
              />
            </MDBCol>
            <MDBCol md="12">
                <MDBInput
                  value={this.state.id}
                  onChange={this.changeHandler}
                  type="id"
                  id="materialFormRegisterPasswordEx4"
                  name="id"
                  label="id"
                  required
                />
              </MDBCol>
        </MDBRow>
            <div className="text-center">
              <MDBBtn color="primary" type="submit" onChange={this.submitHandler}>
                Submit Form

              </MDBBtn>
            </div>
          </form>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
</MDBContainer>
</div>
    )
  }
}
