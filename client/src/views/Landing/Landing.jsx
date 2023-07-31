import React from "react";
import Start from "../../components/Start/Start";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetFilters } from "../../redux/actions";

const Landing = () => {

  const dispatch = useDispatch();

  useEffect(()=>{ 
    return () => {
      dispatch(resetFilters())
    }
  },[dispatch])

  return (
    <div>
      {/* <img src="" alt="" width="360" height="200" /> */}
      <Start />
    </div>
  );
};

export default Landing;
