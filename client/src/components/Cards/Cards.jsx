import Card from "../Card/Card";
import style from './Cards.module.css'

const Cards = ({ currentPok }) => {
  return (
    <div className={style.cards} >
      {Array.isArray(currentPok) ? (   //Cuando hago una peticion a la API, "getPokemons" me devuelve un array
        currentPok.map((pok) => (
          <Card
            id={pok.id} 
            key={pok.id}            
            name={pok.name}
            image={pok.image}
            types={pok.types}
          />
        ))
      ) : (   //cuando hago una peticion a la API "getByNameById" me devuelve un objeto
        <Card
          id={currentPok.id}
          key={currentPok.name}
          name={currentPok.name}
          image={currentPok.image}
          types={currentPok.types}
        />
      )}
    </div>
  );
};

export default Cards;
