import React from "react";
import CardList from "../../components/CardList/CardList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const pokCardList = useSelector((state) => state.allPokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      {<CardList pokCardList={pokCardList} />}
    </div>
  );
};

export default Home;
