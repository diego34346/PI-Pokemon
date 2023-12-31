import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getByNameById } from "../../redux/actions";
import style from "./Search.module.css";

const Search = ({ setCurrentPok }) => {
  const dispatch = useDispatch();
  const pokFilter = useSelector((state) => state.pokemonFilter);
  const [inputValue, setInputValue] = useState("");
  const [pokemonNotFound, setPokemonNotFound] = useState(false);

  // console.log(pokFilter);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setPokemonNotFound(false);
  };
  
  const onSearch = () => {  
    if (inputValue.trim() !== "") {
      if (!isNaN(inputValue)) {
        const id = parseInt(inputValue);
        if ((id >= 1 && id <= 1010) /*|| (id >= 10001 && id <= 10271)*/) {
          dispatch(getByNameById(inputValue));
          setInputValue("");
        } else {
          window.alert('Id must be between 0 - 1010');
        }
      } else {
        dispatch(getByNameById(inputValue))
          .then((response) => {   //se encadena una promesa para manejar la respuesta de la acción de Redux.
            if (response && response.error) {
              setPokemonNotFound(true);       
            } else {
              setPokemonNotFound(false);
            }
          })
          .catch((error) => {
            console.log('error!!', error);            
            setPokemonNotFound(true);
          });
        setInputValue("");
      }
    } else {
      window.alert('No data to search');
    }
  }; 

  useEffect(() => { // al ejecutar el onSearch la accion actualiza el estado pokemonFilter:[], lo que dispara el useEffect lo que actualiza la prop currentPok por medio su funcion de actualizacion setCurrentPok, y currentPok es usada por los otros componentes que lo tienen como prop
    setCurrentPok(pokFilter);    
  }, [pokFilter, setCurrentPok, dispatch]);

  const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			onSearch()
			setInputValue('')
		}
	}

  return (
    <div className={style.contSearch}>
      <div className={style.search}>
        <input
          className={style.input}
          placeholder="  Id or Name"
          type="text"
          onKeyUp={handleKeyDown}
          value={inputValue}
          onChange={handleChange}
        />
        <button 
        className={style.btnSearch} 
        type="button" 
        onClick={onSearch} 
        >Search
        </button>
      </div>
      <div className={style.p} >
        {pokemonNotFound && <span>Pokemon not found...</span>}
      </div>
    </div>
  );
};

export default Search;
