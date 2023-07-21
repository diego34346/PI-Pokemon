require("dotenv").config();
const { URL_API } = process.env;
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { objectApi } = require("./getAllApi_Db");

const getPokById = async (id) => {
  try {
    if (id.length > 4) {
      const pokById = await Pokemon.findOne({ where: { id }, include: Type });
      const poKByIdDB = {
        id: pokById.id,
        name: pokById.name,
        image: pokById.image,
        hp: pokById.hp,
        attack: pokById.attack,
        defense: pokById.defense,
        speed: pokById.speed,
        height: pokById.height,
        weight: pokById.weight,
        types: pokById.types.map((pok) => {return {name: pok.name}}),
      };
      return poKByIdDB;
    } else {
      const findPokId = await axios.get(`${URL_API}/${id.toString()}`);
      const poKByIdAPI = objectApi(findPokId.data);
      return poKByIdAPI; 
    }
  } catch (error) {
    console.log(error);
    return error.message
  }
};

const routeGetPokByid = async (req, res) => {
  const { id } = req.params;
  try {
    const pokById = await getPokById(id);
    if (pokById) {
      return res.status(200).json(pokById);
    }
  } catch (error) {
    return res.status(404).json("Pokemon not found - (Handler)");
  }
};

module.exports = {
  routeGetPokByid
};
