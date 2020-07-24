import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Set the given token
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Delete the token if not sent
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
