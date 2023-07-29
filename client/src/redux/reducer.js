import {
  GET_POKEMONS,
  GET_TYPES,
  GET_BY_NAME,
  CLEAN_FILTER,
  ORDER_ALPHABET,
  ORDER_ATTACK,
  FILTER_TYPES,
  RESET_FILTERS
} from "./actions";

const initialState = {
  allPokemon: [],
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
      return {
        ...state,
        pokemonFilter: [...state.allPokemon.sort((a, b) => a.id - b.id)],
      }
    
    case CLEAN_FILTER:
      return {
        ...state,
        pokemonFilter: [],
        allTypes: [],        
      };

    default:
      return state;
  }
};

export default rootReducer;
