import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { orderAlphabet, orderAttack, filterTypes, resetFilters, filterDB, getPokemonsDB } from "../../redux/actions";
import style from "./OrderFilters.module.css";
import Reset from '../../assets/Reset.png'
import MyPokemon from '../../assets/MyPokemon.png'
import Alphabet from '../../assets/Alphabet.png'
import Attack from '../../assets/Attack.png'

const OrderFilter = () => {
  
  /*const allPokemonDB =*/ useSelector((state) => state.allPokemonDB);
  const dispatch = useDispatch()
  const [orderAlpha, setOrderAlpha] = useState('DEFAULT')
  const [orderAtta, setOrderAtta] = useState('DEFAULT')
  const [filterTy, setFilterTy] = useState('DEFAULT') // se inicializan tres estados locales con el valor 'DEFAULT'
  
  const handleSelectChange = (event, action, setState) => {
    event.preventDefault();
    const { value } = event.target;
    setState(value);
    dispatch(action(value));
    // console.log(value)
  }

  const handleMyPok = async () => {
    await dispatch(getPokemonsDB())
    dispatch(filterDB())
  }

  const handleReset = () => {
    dispatch(resetFilters());
    setOrderAlpha("DEFAULT");
    setOrderAtta("DEFAULT");
    setFilterTy('DEFAULT')
  }

  return (
    <div className={style.contFilters} >

      <div className={style.ordFil} >
        <div className={style.h2} >
        <img src={Alphabet} width={50} height={50} alt="Reset"/>
        <h2>Order and filter</h2>
        <img src={Attack} width={50} height={50} alt="Reset"/>
        </div>
        <select onChange={(event) => handleSelectChange(event, orderAlphabet, setOrderAlpha)} value={orderAlpha}>
          <option value="DEFAULT" disabled>Alphabetical</option> 
          <option value="A">Order A - Z</option>
          <option value="D">Order Z - A</option>          
        </select>

        <select onChange={(event) => handleSelectChange(event, orderAttack, setOrderAtta)} value={orderAtta}>
          <option value="DEFAULT" disabled>Attack </option>
          <option value="more">Order Attack +</option>
          <option value="less">Order Attack -</option>
        </select>

        <select onChange={(event) => handleSelectChange(event, filterTypes, setFilterTy)} value={filterTy}>
          <option value="DEFAULT" disabled>Types </option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          {/* <option value="unknown">unknown</option>
          <option value="shadow">shadow</option> */}
        </select>
      </div>

      <div className={style.contReset} >
        <button onClick={handleReset} className={style.btnReset}
        ><img
        src={Reset}
        width={60}
        height={60}
        alt="Reset"/>
        <span className={style.spanReset} >Reset all pokemon</span>
        </button>
      </div>

      <div className={style.contMyPok} >
        <button onClick={handleMyPok} className={style.btnMyPok}
        ><img
        src={MyPokemon}
        width={60}
        height={60}
        alt="myPokemon"/>
        <span className={style.spanMyPok} >My pokemon</span>
        </button>
      </div>

    </div>
  )
}

export default OrderFilter