import React from "react";
import style from "./Card.module.css";
import { Link } from 'react-router-dom'

const Card = ({ id, name, image, types }) => {
  return (
    <div>
      <Link to={'Detail/' + id}>
        <div className={style.Card} >
          <img src={image} width={200} height={130} alt={name} />
          <h1>{name}</h1>
          {types.map(type => (
            <h2 key={type.name}>{type.name}</h2>
            ))}
        </div>
      </Link>
    </div>
  );
};

export default Card;
