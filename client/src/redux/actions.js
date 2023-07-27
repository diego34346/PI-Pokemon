import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_BY_NAME = 'GET_BY_NAME'
export const CLEAN_FILTER = 'CLEAN_FILTER'
export const ORDER_ALPHA = 'ORDER_ALPHA'
export const ORDER_ATTACK = 'ORDER_ATTACK'
export const FILTER_TYPES = 'FILTER_TYPES'
export const FILTER_DB = 'FILTER_DB'

const URL = "http://localhost:3001";

export const getPokemons = () => {
  const endpoint = `${URL}/pokemons`;
  return async (dispatch) => {
    try {
      const reqPokemons = await axios.get(endpoint);
      return dispatch({
        type: GET_POKEMONS,
        payload: reqPokemons.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTypes = () => {
  const endpoint = `${URL}/types`
  return async (dispatch) => {
    try {
      const reqTypes = await axios.get(endpoint);
      return dispatch({
        type: GET_TYPES,
        payload: reqTypes.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const getByNameById = (value) => {
  const endpoint = `${URL}/pokemons/name?name=${value}`
  return async (dispatch) => {
    try {
      const reqByName = await axios.get(endpoint);
      return dispatch({
        type: GET_BY_NAME,
        payload: reqByName.data
      })
    } catch (error) {
      // console.log('error')
      return { error: 'Pokemon not found' }
    }
  }
}

export const orderAlphabet = (A, D) => {
  return { 
    type: ORDER_ALPHA, 
    payload: A, D 
  }
}

// export const orderAttack = (more, less) => {
//   return { 
//     types : ORDER_ATTACK, 
//     payload: more, less 
//   }
// }

// export const filterTypes = (type) => {
//   return async (dispatch) => 
//     dispatch({
//       type: FILTER_TYPES,
//       payload: type
//     })
// }

// export const filterDB = () => {


// }




export const cleanFilter = () => {
  return {
    type: CLEAN_FILTER
  }
}
