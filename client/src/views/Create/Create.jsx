import React from "react";
import Form from "../../components/Form/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanFilter } from "../../redux/actions";

const Create = () => {
  const dispatch = useDispatch();

  useEffect(()=>{    
    dispatch(cleanFilter())    
  },[dispatch])

  return (    
      <div>
        {<Form/>}
      </div>
  );
}

export default Create;

