const { Pokemon, Type } = require("../db");


const postPok = async (dataPok) => {
  const { name, image, hp, attack, defense, speed, height, weight, types } = dataPok;  
  try {
    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    });
    const newType = await Type.findAll({
      where: { name: types }, // busca donde name coincida con los types que se reciben
    });
    // console.log(newType.map(item => {return {name: item.name}}))
    await newPokemon.addType(newType); 
    //Metodo de asociacion en la relacion de los modelos
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const routePostPok = async (req, res) => {
  const dataPok = req.body
  try {
      await postPok(dataPok)
      return res.status(200).json('Successfully created pokemon')

  } catch (error) {
      res.status(400).json('Failed to create pokemon')
  }
};

module.exports = {
  routePostPok,
};


/*
{
	"name": "diego",
	"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
	"hp": 100,
	"attack": 100,
	"defense": 100,
	"speed": 100,
	"height": 100,
	"weight": 100,
	"types": [		
			"shadow",
			"unknown"		
	]
}
*/
