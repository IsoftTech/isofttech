import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/auth";
import Routes from "./Routes";
import store from "./store/index";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "http://localhost:8000";

// Check for token

if (localStorage.jwtToken) {
  // Set Auth Token to the header

  setAuthToken(localStorage.jwtToken);

  // Decode Token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  console.log(decoded);
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
