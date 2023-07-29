import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { orderAlphabet, orderAttack, filterTypes, resetFilters } from "../../redux/actions";


const OrderFilter = () => {
  
  useSelector((state) => state.allPokemon);
  const dispatch = useDispatch()
  const [orderAlpha, setOrderAlpha] = useState('DEFAULT')
  const [orderAtta, setOrderAtta] = useState('DEFAULT')
  const [filterTy, setFilterTy] = useState('DEFAULT')
    
  
  const handleOrdAlph = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setOrderAlpha(value)
    dispatch(orderAlphabet(value))
  }  
  
  const handleOrdAttack = (event) => {
    event.preventDefault();
    const { value } = event.target
    setOrderAtta(value)
    dispatch(orderAttack(value))
  }

  const handleFilTypes = (event) => {
    event.preventDefault()
    const { value } = event.target
    setFilterTy(value)
    dispatch(filterTypes(value))
  }

  const handleReset = () => {
    dispatch(resetFilters());
    setOrderAlpha("DEFAULT");
    setOrderAtta("DEFAULT");
    setFilterTy('DEFAULT')
}


  return (
    <div>
      <div>
        <select onChange={handleOrdAlph} value={orderAlpha}>
          <option value="DEFAULT" disabled>Alphabetical</option> 
          <option value="A">Order A - Z</option>
          <option value="D">Order Z - A</option>          
        </select>

        <select onChange={handleOrdAttack} value={orderAtta}>
          <option value="DEFAULT" disabled>Attack </option>
          <option value="more">Order Attack +</option>
          <option value="less">Order Attack -</option>
        </select>

        <select onChange={handleFilTypes} value={filterTy}>
          <option value="DEFAULT" disabled>Types </option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>
      </div>

      <div>
        <button onClick={handleReset} >Reset</button>
      </div>
    </div>
  )
}

export default OrderFilter