import { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./Pagination.module.css";

const Pagination = () => {
  const allPokemons = useSelector((state) => state.pokemonFilter);
  const [page, setPage] = useState(1);
  const render = 12;
  const totalpages = Math.ceil(allPokemons.length / render);

  const paginatedPokemon = allPokemons.slice(
    (page - 1) * render,
    page * render
  );

  const handleClick = (event) => {
    setPage(event.target.value);
  };

  const buttonI = [];
  for (let i = 1; i <= totalpages; i++) {
    buttonI.push(i);
  }

  return (    
    <div>
      <div className={style.main}>
        {buttonI.map((i) => (
          <button
            className={`${style.button} ${i === parseInt(page) ? style.selected : ""}`}
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