require("dotenv").config();
const { URL_API } = process.env;
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { objectApi } = require("./getAllApi_Db");

const getPokByName = async (name) => {  
  try {
    const pokByName = await Pokemon.findOne({
      where: { name }, //encuentra primera coincidencia
      include: { model: Type },    
    });
    if (pokByName) {
      const poKByNameDB = {
        id: pokByName.id,
        name: pokByName.name,
        image: pokByName.image,
        hp: pokByName.hp,
        attack: pokByName.attack,
        defense: pokByName.defense,
        speed: pokByName.speed,
        height: pokByName.height,
        weight: pokByName.weight,
        types: pokByName.types.map((pok) => {return {name: pok.name}}),
      };
      return poKByNameDB;
    } else {
      const findPokName = await axios.get(`${URL_API}/${name.toLowerCase()}`); 
      // console.log(findPokName.data)
      //obtengo el pokemon de la url_api/name
      const pokByNameApi = objectApi(findPokName.data);
      return pokByNameApi;
    }     
  } catch (error) {
    return error.message   
  }   
};

const routeGetPokByName = async (req, res) => {
  const { name } = req.query;
  try {
      const poKByName = await getPokByName(name);      
        return res.status(200).json(poKByName);  
  } catch (error) {
    return res.status(404).json("Pokemon not found - (Handler)");
  }
};

module.exports = {
  routeGetPokByName
};
