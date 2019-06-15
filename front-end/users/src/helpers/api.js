import axios from "axios";
import { withRouter } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  //Everytime axios is called token will be sent to server everytime
  headers: {
    authorization: localStorage.getItem("token")
  }
});

instance.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("token");
    return config;
  },
  err => {
    if (err.response.status === 401 || err.response.status === 403) {
      this.props.history.push("/login");
    } else {
      return Promise.reject(err);
    }
  }
);

export default withRouter(instance);
