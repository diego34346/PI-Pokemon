import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { orderAlphabet } from "../../redux/actions";
import { orderAttack } from "../../redux/actions";


const OrderFilter = () => {

  useSelector((state) => state.allPokemon);
  const dispatch = useDispatch()
  const [orderAlpha, setOrderAlpha] = useState('DEFAULT')
  const [orderAtta, setOrderAtta] = useState('DEFAULT')


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


  return (
    <div>
      <div>
        <select onChange={handleOrdAlph} value={orderAlpha}>
          <option value="DEFAULT" disabled>select</option> 
          <option value="A">Order A - Z</option>
          <option value="D">Order Z - A</option>
          
        </select>
      </div>

      <div>
        <select onChange={handleOrdAttack} value={orderAtta}>
          <option value="DEFAULT" disabled>select</option>
          <option value="more">Attack +</option>
          <option value="less">Attack -</option>
        </select>

      </div>
    </div>
  )
}

export default OrderFilter