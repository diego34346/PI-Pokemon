import React from "react";
import { resetFilters } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import Form from "../../components/Form/Form";

const Create = () => {
  const dispatch = useDispatch();

  useEffect(()=>{ 
    return () => {
      dispatch(resetFilters())
    }
  },[dispatch])

  return (    
      <div>
        {<Form/>}
      </div>
  );
}

export default Create;

