import { GET_POKEMONS, GET_TYPES, GET_BY_NAME } from "./actions";

const initialState = {
  allPokemon: [],
  allTypes: [],
  pokemonFilter: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_POKEMONS:
      return {
        ...state,
        allPokemon: action.payload
      };

    case GET_TYPES:
      return {
        ...state,
        allTypes: action.payload
      }

    case GET_BY_NAME:
      return {
        ...state,
        pokemonFilter: action.payload
      }

    default:
      return state;
  }
};

export default rootReducer;
