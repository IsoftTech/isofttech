import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../../utils/setAuthToken";

export const loginStart = (userData) => (dispatch) => {
  // return {
  //   type: actionTypes.LOGIN_START,
  //   payload: userData,
  // };

  axios
    .post("/api/signin", userData)
    .then((res) => {
      // Save the token to local storage
      console.log(res.data);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      // Set the token to the default auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const registerStart = (userData, history) => (dispatch) => {
  axios
    .post("/api/signup", userData)
    .then((res) => history.push("/signin"))
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
        // payload: errorToShow,
      });
    });
};

export const setCurrentUser = (decoded) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = (history) => (dispatch) => {
  // Delete token from localStorage

  localStorage.removeItem("jwtToken");
  // remove token for future request
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // Redirect to login
  history.push("/");

  // Hit the logout route in the backend
  axios.get("/api/signout");
};
