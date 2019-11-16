import React, { Component } from "react";
import axios from "axios";
import connect from "redux";
export class Landing extends Component {
  state = {
    nameInput: "",
    subjectInput: "",
    emailInput: "",
    imgInput: "",
    phoneInput: "",
    passwordInput: "",
    teacher: true
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  registerUser = () => {
      console.log(this.state)
    const {
      nameInput: name,
      subjectInput: subject,
      emailInput: email,
      imgInput: img,
      phoneInput: phone,
      passwordInput: password,
      teacher
    } = this.state;

    if (teacher === false) {
      try {
        axios.post("/auth/student", { name, email, img, phone, password })
      } catch {
        console.log("error");
      }
    } else {
      axios.post("/auth/teacher", {
        name,
        subject,
        email,
        img,
        phone,
        password
      });
    }
  };

  render() {
      console.log(this.state)
    return (
      <div>
        <input type="text" name="nameInput" onChange={this.handleChange} />
        <input type="text" name="subjectInput" onChange={this.handleChange} />
        <input type="text" name="emailInput" onChange={this.handleChange} />
        <input type="text" name="imgInput" onChange={this.handleChange} />
        <input type="text" name="phoneInput" onChange={this.handleChange} />
        <input type="text" name="passwordInput" onChange={this.handleChange} />
        <button onClick={this.registerUser}>Register</button>
      </div>
    );
  }
}

export default Landing;
