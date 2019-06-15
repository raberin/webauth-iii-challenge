import React from "react";
import { withRouter } from "react-router-dom";

function withAuth(Component) {
  const Auth = props => {
    //Returns a boolean true if theres a token
    const isAuth = Boolean(localStorage.getItem("token"));

    //If there is no token, push user to login screen
    if (!isAuth) {
      props.history.push("/login");
    }

    //If there is token, push user to the component that is wrapped in this HOC
    return isAuth ? (
      <Component {...props} />
    ) : (
      <div>you are not authorized</div>
    );
  };
  return withRouter(Auth);
}

export default withAuth;
