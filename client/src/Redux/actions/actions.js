import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_DETAILS = 'GET_DETAILS';
// export const FILTER_DOG = 'FILTER_DOG';
// export const GET_TEMPERAMENT = 'GET_TEMPERAMENT' 

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
      let details = (await axios(`http://localhost:3001/dogs/${id}`)).data
      return dispatch({
      type: GET_DETAILS,
      payload: details
    })
  } catch (error) {
    console.log(error)
  }
}
}

export const dogPost = (payload) => {
  return async function() {
    try {
      const response = await axios.post("http://localhost:3001/dogs", payload);
      // return response
    } catch (error) {
      console.log(error)
    }
  }
}

// export const getTemperament = () => {
//   return async function(dispatch) {
//     try {
//       let temperaments = (await axios("http://localhost:3001/temperaments")).data;
//       let allTemps = temperaments.map(e => e.name)
//       return dispatch({
//         type: GET_TEMPERAMENT,
//         payload: allTemps
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// export const filterDog = (value) => {
//   console.log(value)
//   return {
//     type: FILTER_DOG,
//     payload: value
//   }
// }