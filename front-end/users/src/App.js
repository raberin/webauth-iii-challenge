import React from "react";
import logo from "./logo.svg";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

class App extends React.Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <h1>Web Auth III Challenge</h1>

        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/users">Users</NavLink>
          <button onClick={this.logout}>Logout</button>
        </nav>

        <main>
          <Route path="/login" component={Login} />
          {/* <Route path="/signup" component={Signup} />
        <Route path="/users" component={Users} />  */}
        </main>
      </div>
    );
  }
}

export default withRouter(App);
