import React from "react";
import api from "../helpers/api.js";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      //Grabs the instance helper function from api.js
      //To access the base endpoint "http://localhost:5000/api"
      const result = await api.post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      });

      console.log(result);
      //Saves the cookie on the session is not preferred
      // document.cookie = `token=${result.data.token}`;

      //Saving the cookie in localStorage is the preferred way
      localStorage.setItem("token", result.data.token);

      //Using withRouter, we can access react-router methods redirect react-router to /users
      this.props.history.push("/users");
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
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
