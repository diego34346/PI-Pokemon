import React from "react";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import { getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import style from './CardList.module.css'

const CardList = ({ pokCardList }) => {
  const [currentPok, setCurrentPok] = useState(pokCardList); //Le asigno el valor de PokCardList para renderizar
  const [pokemonNotFound, setPokemonNotFound] = useState(false)
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);

  useEffect(() => {
    if(allTypes.length === 0){
      dispatch(getTypes())
    }
  }, [dispatch, allTypes]);

  return (
    <div>
      <div className={style.contSearch} >
        <Search setCurrentPok={setCurrentPok} setPokemonNotFound={setPokemonNotFound}/>
      </div>

      <div>        
      <Pagination pokCardList={pokCardList} setCurrentPok={setCurrentPok} />
      </div>
      
      <div>        
        {currentPok.length > 0 || !pokemonNotFound ? (
          <Cards currentPok={currentPok} />
        ) : (
          "Pokemon Not Found"
        )}
      </div>

      
    </div>
  );
};

export default CardList;
