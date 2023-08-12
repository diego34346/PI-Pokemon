import React from "react";
import { Link } from "react-router-dom";
import style from "./Start.module.css";

const Start = () => {
  return (
    <div>
      <Link to={"/Home"}>
        <button 
        className={style.button}>
        <span className={style.span}>Start</span> 
        </button>
      </Link>
    </div>
  );
};

export default Start;
