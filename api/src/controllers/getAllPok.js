const { getAllPokAPI, /*getAllPokDB*/ } = require("./getAllApi_Db");

const getAllPok = async () => {
  try {
    const dataAPI = await getAllPokAPI();
    // const dataDB = await getAllPokDB();
    // console.log(dataAPI)
    return dataAPI /*, ...dataDB*/;
    
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
