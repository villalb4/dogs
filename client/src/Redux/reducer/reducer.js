import { GET_DOGS , GET_DETAILS } from "../actions/actions";

const initialState = {
  dogs: [],
  details: []
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload
      }
    case GET_DETAILS:
      return {
        ...state,
        details: payload
      }
    default:
      return state
  }
};

export default rootReducer;