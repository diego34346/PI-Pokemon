import React from "react";
import { useState } from "react";
import style from './Pagination.module.css'
import Next from '../../assets/Next.png'
import Prev from '../../assets/Prev.png'

const Pagination = ({ pokCardList, setCurrentPok }) => {
  const RenderCards = 12;
  const [actualPage, setActualPage] = useState(0);

  const next = () => {
    const allpokemon = pokCardList.length;
    const next = actualPage + 1;
    const index = next * RenderCards;
    if (index > allpokemon) return;
    setCurrentPok([...pokCardList].splice(index, RenderCards));
    setActualPage(next);
  };

  const prev = () => {
    const prev = actualPage - 1;
    if (prev < 0) return;
    const index = prev * RenderCards;
    setCurrentPok([...pokCardList].splice(index, RenderCards));
    setActualPage(prev);
  };

  return (
    <div>
      <div className={style.contPag} >
        <button onClick={() => prev()} >
        <img
        src={Prev}
        width={30}
        height={30}
        alt="Prev"/>
        <span>Prev</span>
        </button>

        <label> {actualPage + 1} </label>

        <button onClick={() => next()} >
        <span>Next</span>
        <img
        src={Next}
        width={30}
        height={30}
        alt="Next"/>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
