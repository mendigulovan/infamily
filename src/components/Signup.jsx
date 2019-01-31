import React from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";


export default class Signup extends React.Component {

  state = {
    device_id: '',
    name: '',
    email: '',
    phone: '',

  };

  handleUserIDChange = event => {this.setState({ device_id: event.target.value })}
  handleFullNameChange = event => {this.setState({ name: event.target.value })}
  handleEmailIDChange = event => {this.setState({ email: event.target.value })}
  handleMobileChange = event => {this.setState({ phone: event.target.value })}


  handleSubmit = event => {
    event.preventDefault();

    axios.post('https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api/documents/',
      { device_id: this.state.device_id, name: this.state.name, email: this.state.email, phone: this.state.phone },)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="sign_up">
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
          <form onSubmit={this.handleSubmit}>
          <MDBRow>
                  <MDBCol md="12">
                    <MDBInput
                      value={this.state.name}
                      name="name"
                      icon="user"
                      onChange={this.handleFullNameChange}
                      type="text"
                      id="materialFormRegisterNameEx"
                      label="Your name"
                      required
                    />
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      value={this.state.email}
                      onChange={this.handleEmailIDChange}
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
                        onChange={this.handleMobileChange}
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
                          value={this.state.device_id}
                          onChange={this.handleUserIDChange}
                          type="text"
                          id="materialFormRegisterPasswordEx4"
                          name="id"
                          label="id"
                          required
                        />
                      </MDBCol>
                </MDBRow>
                    <div className="text-center">
                      <MDBBtn color="primary" type="submit">
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
