import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_BY_NAME = 'GET_BY_NAME'
export const CLEAN_FILTER = 'CLEAN_FILTER'
export const ORDER_ALPHABET = 'ORDER_ALPHABET'
export const ORDER_ATTACK = 'ORDER_ATTACK'
export const FILTER_TYPES = 'FILTER_TYPES'
export const FILTER_DB = 'FILTER_DB'
export const RESET_FILTERS = 'RESET_FILTERS'
export const POST_POK = 'POST_POK'
export const GET_POKEMONS_DB = "GET_POKEMONS_DB";
export const GET_BY_ID = 'GET_BY_ID'

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

export const getPokemonsDB = () => {
  const endpoint = `${URL}/pokemons/db`;
  return async (dispatch) => {
    try {
      const reqPokemons = await axios.get(endpoint);
      return dispatch({
        type: GET_POKEMONS_DB,
        payload: reqPokemons.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterDB = () => {
  return {
    type: FILTER_DB,
  }
}

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

export const getById = (id) => {
  const endpoint = `${URL}/pokemons/${id}`
  return async (dispatch) => {
    try {
      const reqById = await axios.get(endpoint);
      return dispatch({
        type: GET_BY_ID,
        payload: reqById.data
      })
    } catch (error) {
      // console.log('error')
      return { error: 'Pokemon not found' }
    }
  }
}

export const postPok = (newPokemon) => {
  return async () => {
    try {
      const DataPokemon = {
        name: newPokemon.name,
        hp: newPokemon.hp,
        attack: newPokemon.attack,
        defense: newPokemon.defense,
        speed: newPokemon.speed,
        weight: newPokemon.weight,
        height: newPokemon.height,
        types: [newPokemon.type1 , newPokemon.type2]
      }
      const post = await axios.post(`${URL}/pokemons`,DataPokemon)
      return console.log(post.data)    
    } catch (error) {
      console.log(error)      
    }
  }
}

export const orderAlphabet = (A, D) => {
  return { 
    type: ORDER_ALPHABET, 
    payload: A, D
  }
}

export const orderAttack = (more, less) => {
  return { 
    type : ORDER_ATTACK, 
    payload: more, less,
  }
}

export const filterTypes = (types) => {
  return{
    type: FILTER_TYPES,
    payload: types
  }
}


export const resetFilters = () => {
  return { 
    type: RESET_FILTERS, 
  };
}

export const cleanFilter = () => {
  return {
    type: CLEAN_FILTER
  }
}
