const { getAllPokAPI, getAllPokDB } = require("./getAllApi_Db");

//concatena en un array lo que me devuelve la api y la DB
const getAllPok = async () => {
  try {
    const dataAPI = await getAllPokAPI();
    const dataDB = await getAllPokDB();
    return [...dataAPI, ...dataDB];
    
  } catch (error) {
    console.log(error);
    return error.message
  }
};

const routeGetAllPok = async (req, res) => {
  try {
    const allPokemons = await getAllPok();
    return res.status(200).json(allPokemons);
    
  } catch (error) {
    return res.status(404).json("Pokemons not found - (Handler)");
  }
};

module.exports = {
  routeGetAllPok
};
