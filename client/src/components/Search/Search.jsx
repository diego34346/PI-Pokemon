import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getByNameById, cleanFilter } from "../../redux/actions";
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
        if (id >= 1 && id <= 1000) {
          dispatch(getByNameById(inputValue));
          setInputValue("");
        } else {
          window.alert('Number between 0 - 1000');
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

  useEffect(()=>{
    return () => {
      dispatch(cleanFilter())
    }
  },[dispatch])

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
      {pokemonNotFound && <p>Pokemon not found...</p>}
    </div>
  );
};

export default Search;



//   const onSearch = () => {  
//     if (inputValue.trim() !== "") {
//       if (!isNaN(inputValue)) { // Comprueba si el inputValue es un número
//         const id = parseInt(inputValue);
//         if (id >= 1 && id <= 1000) { // Comprueba si el número está en el rango válido
//           dispatch(getByNameById(inputValue));
//           setInputValue("");
//         } else {
//           window.alert('Dato invalido');
//         }
//       } else {
//         dispatch(getByNameById(inputValue));
//         setInputValue("");
//       }
//     } else {
//       window.alert('Dato invalido');
//     }
//   };  

//   useEffect(() => { // al ejecutar el onSearch la accion actualiza el estado pokemonFilter:[], lo que dispara el useEffect lo que actualiza la prop currentPok por medio su funcion de actualizacion setCurrentPok, y currentPok es usada por los otros componentes que lo tienen como prop
//     setCurrentPok(pokFilter);
//   }, [pokFilter, setCurrentPok]);

//   const handleKeyDown = (event) => {
// 		if (event.key === 'Enter') {
// 			onSearch()
// 			setInputValue('')
// 		}
// 	}

