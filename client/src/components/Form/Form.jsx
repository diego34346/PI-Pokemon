import React from "react";
import { resetFilters } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch} from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    return () => {
      dispatch(resetFilters())
    }
  },[dispatch])

  return (
    <div>
      <h1>Form</h1>
    </div>
  );
};

export default Form;
