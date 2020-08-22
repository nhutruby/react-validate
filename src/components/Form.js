import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Message from "./Message";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      fields: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
      }
      if (fields["name"].length < 3) {
        formIsValid = false;
      }
    }
    console.log(formIsValid);
    //Email
    if (!fields["email"]) {
      formIsValid = false;
    }

    if (typeof fields["email"] !== "undefined") {
      if (
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fields["email"]) === false
      ) {
        formIsValid = false;
      }
    }
    // Phone
    if (!fields["phone"]) {
      formIsValid = false;
    }
    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[2-9]\d{9}$/)) {
        formIsValid = false;
      }
    }
    // Blog URL
    if (!fields["address"]) {
      formIsValid = false;
    }
    if (typeof fields["address"] !== "undefined") {
      if (
        !fields["address"].match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        )
      ) {
        formIsValid = false;
      }
    }
    return formIsValid;
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    console.log(this.state);
  }
  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  }
  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>Name:</h3>
          <input
            ref="name"
            type="text"
            size="30"
            placeholder="Name"
            onChange={this.handleChange.bind(this, "name")}
            value={this.state.fields["name"]}
          />

          <h3>Email:</h3>
          <input
            refs="email"
            type="text"
            size="30"
            placeholder="Email"
            onChange={this.handleChange.bind(this, "email")}
            value={this.state.fields["email"]}
          />
          <h3>Phone:</h3>
          <input
            refs="phone"
            type="text"
            size="10"
            placeholder="Phone"
            onChange={this.handleChange.bind(this, "phone")}
            value={this.state.fields["phone"]}
          />
          <h3>Blog URL:</h3>
          <input
            refs="address"
            type="text"
            size="30"
            placeholder="Address"
            onChange={this.handleChange.bind(this, "address")}
            value={this.state.fields["address"]}
          />
          <div className="small-6 small-centered text-center columns">
            <a
              href="#"
              className="button success expand round text-center"
              onClick={this.contactSubmit.bind(this)}
            >
              Verify
            </a>
          </div>
          <Message validate={this.state.isFormValid} />
        </form>
      </div>
    );
  }
}

export default Form;
