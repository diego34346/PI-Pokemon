const { getAllPokDB } = require("./getAllApi_Db");

//concatena en un array lo que me devuelve la api y la DB
const getAllDb = async () => {
  try {
    const dataDB = await getAllPokDB();
    return dataDB;
    
  } catch (error) {
    console.log(error);
    return error.message
  }
};

const routeGetAllDb = async (req, res) => {
  try {
    const allPokemonsDB = await getAllDb();
    return res.status(200).json(allPokemonsDB);
    
  } catch (error) {
    return res.status(404).json("Pokemons not found - (Handler)");
  }
};

module.exports = {
  routeGetAllDb
};