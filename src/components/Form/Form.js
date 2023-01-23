import React from "react";
import { Component } from "react";
import { useState } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      phone: "",
      password: "",
      email: "",
      submitted: "",
      allValid: false,
    };
    this.nameHandler = this.nameHandler.bind(this);

    this.phoneHandler = this.phoneHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  nameHandler(event) {
    this.setState({ name: event.target.value });
  }

  phoneHandler(event) {
    this.setState({ phone: event.target.value });
  }
  passwordHandler(event) {
    this.setState({ password: event.target.value });
  }
  emailHandler(event) {
    this.setState({ email: event.target.value });
  }
  submitHandler(event) {
    event.preventDefault();
    {
      this.state.name &&
        this.state.phone &&
        this.state.password &&
        this.state.email &&
        this.setState({ allValid: true });
    }
    {
      this.setState({ submitted: "yes" });
    }
  }

  render() {
    return (
      <form className="container" onSubmit={this.submitHandler}>
        <img src="./pic1.jpg" className="img" />

        <div className="form">
          <h1 className="title">Sign Up</h1>
          <div className="inputs">
            <label htmlFor="input">NAME</label>
            <input
              className="input"
              type="text"
              value={this.value}
              onChange={this.nameHandler}
            />
            {this.state.submitted && !this.state.name && (
              <div className="error">Please enter your name!</div>
            )}
          </div>

          <div className="inputs">
            <label htmlFor="input">PASSWORD</label>
            <input
              className="input"
              type="password"
              onChange={this.passwordHandler}
            />
            {this.state.submitted && !this.state.password && (
              <div className="error">Please enter your password!</div>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="input">PHONE</label>
            <input
              className="input"
              type="number"
              onChange={this.phoneHandler}
            />
            {this.state.submitted && !this.state.phone && (
              <div className="error">Please enter your phone!</div>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="input">EMAIL</label>
            <input
              className="input"
              type="email"
              onChange={this.emailHandler}
            />
            {this.state.submitted && !this.state.email && (
              <div className="error">Please enter your email!</div>
            )}
          </div>
          <button className="button">Sign Up</button>

          {this.state.allValid && (
            <div className="modal">You're signed up!</div>
          )}
        </div>
      </form>
    );
  }
}

export default Form;
