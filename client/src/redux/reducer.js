import { GET_POKEMONS, GET_TYPES, GET_BY_NAME, CLEAN_FILTER, ORDER_ALPHA } from "./actions";

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

    case ORDER_ALPHA:
      const allPokOrdAlph = [...state.allPokemon]
      return {
        ...state,
        allPokemon: action.payload === 'A'    
        ? allPokOrdAlph.sort((a, b) => {
          if (a.name > b.name) return 1
          else if(a.name < b.name) return -1
          else return 0 
        }) : 
        allPokOrdAlph.sort((a, b) => {
        if (a.name < b.name) return 1
        else if(a.name > b.name) return -1
        else return 0 
        })      
      }

    case CLEAN_FILTER:
      return {
        ...state,
        pokemonFilter: []
      }
    

    default:
      return state;
  }
};

export default rootReducer;
