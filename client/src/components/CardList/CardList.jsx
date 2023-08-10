import React from "react";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import { getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";

const CardList = ({ pokCardList }) => {
  const RenderCards = 12;
  const [currentPok, setCurrentPok] = useState(pokCardList); //Le asigno el valor de PokCardList para renderizar
  const [pokemonNotFound, setPokemonNotFound] = useState(false)
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);

  useEffect(() => {
    setCurrentPok([...pokCardList].splice(0, RenderCards)); //Se hace una copia del array pokCardList para extraer los elementos del valor que tenga RenderCards
  }, [pokCardList]);

  useEffect(() => {
    if(allTypes.length === 0){
      dispatch(getTypes())
    }
  }, [dispatch, allTypes]);

  return (
    <div>
      <Search setCurrentPok={setCurrentPok} setPokemonNotFound={setPokemonNotFound}/>

      {currentPok.length > 0 || !pokemonNotFound ? (
        <Cards currentPok={currentPok} />
      ) : (
        "Pokemon Not Found"
      )}
      
      <Pagination pokCardList={pokCardList} setCurrentPok={setCurrentPok} />
    </div>
  );
};

export default CardList;
