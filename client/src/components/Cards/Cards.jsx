import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ currentPok }) => {
  return (
    <div className={style.cards}>
      {currentPok.map((pok) => (
        <Card
          id={pok.id}
          key={pok.id}
          name={pok.name}
          image={pok.image}
          types={pok.types}
        />
      ))}
    </div>
  );
};

export default Cards;
