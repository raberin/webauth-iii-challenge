import React from "react";
import api from "./helpers/api.js";
import withAuth from "./helpers/auth.js";

class Users extends React.Component {
  state = {
    users: []
  };

  //After render, loads the api and grabs users from db
  async componentDidMount() {
    try {
      const result = await api.get("/users");
      this.setState({
        users: result.data
      });
      console.log(result);
    } catch (err) {
      //Catch error is stored in api.js
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <h1>Users</h1>

        <ul>
          {/* Maps out all the current users in the DB */}
          {this.state.users.map((user, i) => {
            return <li key={i}>{user.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(Users);
