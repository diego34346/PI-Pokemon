import React from "react";
import Start from "../../components/Start/Start";
import style from "./Landing.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanFilter } from "../../redux/actions";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(()=>{    
    dispatch(cleanFilter())    
  },[dispatch])

  return (
    <div className={style.landing} >
      {/* <img src="" alt="" width="360" height="200" /> */}
      <Start />
    </div>
  );
};

export default Landing;
