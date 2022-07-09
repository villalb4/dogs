import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';

const getDogs = () => {
  return async function(dispatch) {
    let dogs = (await axios("http://localhost:3001/dogs")).data 
    return dispatch({
      type: GET_DOGS,
      payload: dogs
    })
  }
}