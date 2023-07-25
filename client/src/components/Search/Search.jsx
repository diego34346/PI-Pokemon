import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getByNameById } from "../../redux/actions";
import style from "./Search.module.css";

const Search = ({ setCurrentPok }) => {
  const dispatch = useDispatch();
  const pokFilter = useSelector((state) => state.pokemonFilter);
  const [inputValue, setInputValue] = useState("");

  console.log(pokFilter);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSearch = () => {  
    if (inputValue.trim() !== "") {
      if (!isNaN(inputValue)) { // Comprueba si el inputValue es un número
        const id = parseInt(inputValue);
        if (id >= 1 && id <= 1000) { // Comprueba si el número está en el rango válido
          dispatch(getByNameById(inputValue));
          setInputValue("");
        } else {
          window.alert('Dato invalido');
        }
      } else {
        dispatch(getByNameById(inputValue));
        setInputValue("");
      }
    } else {
      window.alert('Dato invalido');
    }
  };  

  useEffect(() => {
    setCurrentPok(pokFilter);
  }, [pokFilter, setCurrentPok]);

  const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			onSearch()
			setInputValue('')
		}
	}

  return (
    <div className={style.search}>
      <div>
        <input
          placeholder="Search"
          type="text"
          onKeyUp={handleKeyDown}
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
