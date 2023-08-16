import {
  GET_POKEMONS,
  GET_TYPES,
  GET_BY_NAME,
  ORDER_ALPHABET,
  ORDER_ATTACK,
  FILTER_TYPES,
  RESET_FILTERS,
  CLEAN_FILTER,
  GET_BY_ID,
  GET_POKEMONS_DB,
  FILTER_DB,
} from "./actions";

const initialState = {
  allPokemon: [],
  allPokemonDB: [],
  allTypes: [],
  pokemonFilter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemon: action.payload,
        pokemonFilter: action.payload,
      };

    case GET_POKEMONS_DB:
      return {
        ...state,
        allPokemonDB: action.payload,
      };
      
    case FILTER_DB:
      return {
        ...state,
        pokemonFilter: [...state.allPokemonDB]
      }
      
    case GET_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };
      
      case GET_BY_NAME:
        return {
          ...state,
      pokemonFilter: action.payload,
    };

    case GET_BY_ID:
      return {
        ...state,
        pokemonFilter: action.payload,
      };
      
    case ORDER_ALPHABET:        
      const allPokOrdAlph = [...state.pokemonFilter]
      return {
        ...state,
        pokemonFilter:
        action.payload === "A"
        ? allPokOrdAlph.sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        })
        : allPokOrdAlph.sort((a, b) => {
          if (a.name < b.name) return 1;
          else if (a.name > b.name) return -1;
          else return 0;
        }),
      };

    case ORDER_ATTACK:
      const allPokOrdAttack = [...state.pokemonFilter];
      return {
        ...state,
        pokemonFilter:
          action.payload !== "more"
            ? allPokOrdAttack.sort((a, b) => a.attack - b.attack)
            : allPokOrdAttack.sort((a, b) => b.attack - a.attack),
      };

    case FILTER_TYPES:
      return {
        ...state,
        pokemonFilter: state.allPokemon.filter(
          (pok) =>
            pok.types.map((type) => type.name)[0] === action.payload ||
            pok.types.map((type) => type.name)[1] === action.payload
        ),
      };

    case RESET_FILTERS:
      const sortedPokemon = [...state.allPokemon].sort((a, b) => a.id - b.id);
      // const slicedPokemon = sortedPokemon.slice(0, 12);  
      return {
        ...state,
        pokemonFilter: sortedPokemon,
      };
    
    case CLEAN_FILTER:
      return {
        ...state,
        pokemonFilter: [],
        allPokemonDB: [],       
      };

    default:
      return state;
  }
};

export default rootReducer;
