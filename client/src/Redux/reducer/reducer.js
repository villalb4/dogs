import { GET_DOGS , GET_DETAILS , GET_TEMPERAMENT, DOG_POST ,FILTER_DOG, FILTER_CREATED, DOG_WANTED} from "../actions/actions";

const initialState = {
  dogs: [],
  allDogsFilter: [],
  details: [],
  temperaments: [],
  dogsHome: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
        allDogsFilter: payload,
        dogsHome: payload,
      }
    case GET_DETAILS:
      return {
        ...state,
        details: payload
      }
    case DOG_POST:
      return {
        ...state
      }
    case GET_TEMPERAMENT:
      return {
        ...state,
        temperaments: payload
      }
    case FILTER_DOG:
      const allDogs = state.allDogsFilter;
      const filtro = payload === 'All' ? allDogs : allDogs.filter(e => e.temperament.includes(payload))
      return {
        ...state,
        dogs: filtro
      }
    case FILTER_CREATED:
      const allDogsFilter = state.allDogsFilter;
      const createFilter = payload === 'creados' ?  allDogsFilter.filter(d => d.creadoEnDB) : allDogsFilter.filter(d => !d.creadoEnDB);
      return {
        ...state,
        dogs: payload === "All" ? allDogsFilter : createFilter
      }
    case DOG_WANTED:
      console.log(payload)
      return {
        ...state,
        dogsHome: payload
      }
    
    default:
      return state
  }
};

export default rootReducer;