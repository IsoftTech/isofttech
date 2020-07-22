import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: null,
  // loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
