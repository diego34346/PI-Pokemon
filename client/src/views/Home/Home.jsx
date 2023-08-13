import React from "react";
import CardList from "../../components/CardList/CardList";
import OrderFilter from "../../components/OrderFilter/OrderFilters";
import Nav from "../../components/Nav/Nav"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, resetFilters } from "../../redux/actions";
import style from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch();
  const pokCardList = useSelector((state) => state.allPokemon);

  useEffect(() => {
    // Comprobamos si pokCardList está vacío antes de hacer el dispatch
    if (pokCardList.length === 0) {
      dispatch(getPokemons());
    }
    dispatch(resetFilters())
  }, [dispatch, pokCardList]);

  return (
    <div>
      <div className={style.nav}>
        {<Nav/>}
      </div>
      <div className={style.order} >
        {<OrderFilter/>}
      </div>

      <div >
        {<CardList pokCardList={pokCardList} />}
      </div>
      
    </div>
  );
};

export default Home;
