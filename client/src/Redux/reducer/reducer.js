import { GET_DOGS , GET_DETAILS , FILTER_DOG, GET_TEMPERAMENT } from "../actions/actions";

const initialState = {
  dogs: [],
  allDogsFilter: [],
  details: [],
  temperaments: []
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
        allDogsFilter: payload,
      }
    case GET_DETAILS:
      return {
        ...state,
        details: payload
      }

    case 'DOG_POST':
      return {
        ...state
      }
    case FILTER_DOG:
      const allDogs = state.allDogsFilter;
      const filtro = payload === 'All' ? allDogs : allDogs.filter(e => e.temperament.includes(payload))
      return {
        ...state,
        dogs: filtro
      }
    case GET_TEMPERAMENT:
      return {
        ...state,
        temperaments: payload
      }
    default:
      return state
  }
};

export default rootReducer;