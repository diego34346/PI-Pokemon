import React from "react";
import { useState } from "react";

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
      <div>
        <button onClick={() => prev()}>Prev</button>
        <label> {actualPage + 1} </label>
        <button onClick={() => next()}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
