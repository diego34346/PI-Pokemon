import React from "react";
import { Link } from "react-router-dom";
import style from "./Start.module.css";

const Start = () => {
  return (
    <div>
      <Link to={"/Home"}>
        <button className={style.button}>Start</button>
      </Link>
    </div>
  );
};

export default Start;
