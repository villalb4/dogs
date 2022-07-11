import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_DETAILS = 'GET_DETAILS';

export const getDogs = () => {
  return async function(dispatch) {
    try {
      let dogs = (await axios("http://localhost:3001/dogs")).data
      return dispatch({
      type: GET_DOGS,
      payload: dogs
    })
    } catch(error) {
      console.log(error)
    }
  }
}

export const getDetail = (id) => {
  return async function(dispatch) {
    try {
      let details = (await axios("http://localhost:3001/dogs/" + id)).data
      return dispatch({
      type: GET_DETAILS,
      payload: details
    })
    } catch (error) {
      console.log(error)
    }
  }
}