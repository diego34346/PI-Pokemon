import Card from "../Card/Card";

const Cards = ({ currentPok }) => {
  return (
    <div>
      {Array.isArray(currentPok) ? (
        currentPok.map((pok) => (
          <Card
            key={pok.id}            
            name={pok.name}
            image={pok.image}
            types={pok.types}
          />
        ))
      ) : (
        <Card
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
