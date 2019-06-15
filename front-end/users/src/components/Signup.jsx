import React from "react";
import api from "../helpers/api.js";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      //Grabs the instance helper function from api.js
      //To access the base endpoint "http://localhost:5000/api"
      const result = await api.post("/auth/register", {
        username: this.state.username,
        password: this.state.password,
        department: this.state.department
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={this.handleChange}
            value={this.state.department}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
