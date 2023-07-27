import { GET_POKEMONS, GET_TYPES, GET_BY_NAME, CLEAN_FILTER, ORDER_ALPHA, ORDER_ATTACK } from "./actions";

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

      case ORDER_ATTACK:
        const allPokOrdAttack = [...state.allPokemon]
        return {
          ...state,
          allPokemon: action.payload !== 'more'
          ? allPokOrdAttack.sort((a, b) => a.attack - b.attack)
          : allPokOrdAttack.sort((a, b) => b.attack - a.attack)
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
