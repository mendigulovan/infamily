import React, { Component } from 'react';
import '../css/Documents.css';
import Signup from '../components/Signup';
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



    }


  render() {
    return (
      <div className="form-registration">
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
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    group
                    type="password"
                    validate
                  />
                  <MDBInput
                    label="Type your phone number"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
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
