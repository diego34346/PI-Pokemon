import React from "react";
import style from "./Card.module.css";
import { Link } from 'react-router-dom'

const Card = ({ id, name, image, types }) => {
  return (
    <div>
      <Link className={style.link} to={'Detail/' + id}>
        <div className={style.card} >
          <h1>{name}</h1>
          <img src={image} alt={name} />
          {types.map(type => (
            <h2 key={type.name} className={style[type.name]}>{type.name}</h2>
            ))}
        </div>
      </Link>
    </div>
  );
};

export default Card;
