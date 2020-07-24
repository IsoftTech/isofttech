import axios from "axios";

import * as actionTypes from "./actionTypes";

export const getCurrentProfile = (payload) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/user/" + payload._id)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: {},
      });
    });
};

export const updateProfile = (newProfile, history) => (dispatch) => {
  console.log(newProfile);
  axios
    .put("/api/user/" + newProfile._id, newProfile)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

const setProfileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING,
  };
};
