import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./Pagination.module.css";

const Pagination = () => {
  const pokemonFilter = useSelector((state) => state.pokemonFilter);
  const [page, setPage] = useState(1);
  const render = 12;
  const totalpages = Math.ceil(pokemonFilter.length / render);

  const paginatedPokemon = Array.isArray(pokemonFilter)
  ? pokemonFilter.slice((page - 1) * render, page * render)
  : [];

  useEffect(() => {
    setPage(1); // Cambiar la página a 1 cuando cambie pokemonFilter
  }, [pokemonFilter]);

  const handleClick = (event) => {
    setPage(parseInt(event.target.value));
  };

  const buttonSelect = [];
  for (let i = 1; i <= totalpages; i++) {
    buttonSelect.push(i);
  }

  return (    
    <div>
      <div className={style.main}>
        {buttonSelect.map((i) => (
          <button
            className={`${style.button} ${i === (page) ? style.selected : ""}`}
            key={i}
            value={i}
            onClick={handleClick}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        <Cards currentPok={paginatedPokemon}></Cards>
      </div>
    </div>
  );
};
export default Pagination;