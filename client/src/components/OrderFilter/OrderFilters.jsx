import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { orderAlphabet } from "../../redux/actions";


const OrderFilter = () => {

  useSelector((state) => state.allTypes);
  const dispatch = useDispatch()
  const [orderAlpha, setOrderAlpha] = useState('DEFAULT')


  const handleOrdAlph = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setOrderAlpha(value)
    dispatch(orderAlphabet(value))
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
        
      </div>
    </div>
  )
}

export default OrderFilter