require("dotenv").config();
const { URL_API } = process.env;
const axios = require("axios");
const { Pokemon, Type } = require("../db");

//objeto que devuelve la url/poke o /id o /name
const objectApi = (pokemon) => {
  const image1 = pokemon.sprites.other.dream_world.front_default
  const image2 = pokemon.sprites.other.home.front_default
  const image3 = pokemon.sprites.other['official-artwork'].front_default
  
  const objectApi = {
    id: pokemon.id,
    name: pokemon.name,
    image: image1 || image2 || image3,
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((pok) => {return {name: pok.type.name}}),
  };
  return objectApi;
};

const getAllPokAPI = async () => {
  try {
    const firstReq = await axios.get(`${URL_API}?offset=0&limit=20`);
    const secondReq = firstReq.data.results.map((obj) => axios.get(obj.url));
    const dataPokemons = await Promise.all(secondReq);
    let pokemons = dataPokemons.map((obj) => obj.data);
    // console.log(pokemons)
    //obtengo la data de cada pokemon por la sub Url
    const allPokemonsAPI = pokemons.map((pokemon) => objectApi(pokemon));
    // console.log(allPokemons)
    return await allPokemonsAPI;

  } catch (error) {
    console.log(error);
    return error;
  }
};

// peticion usando promesas

// const getAllPokAPI = () => {
//   return new Promise((resolve, reject)=>{
//     axios.get(`${URL_API}?limit=1`)
//     .then((firstReq)=>{
//       const secondReq = firstReq.data.results.map((obj) => axios.get(obj.url));
//       return Promise.all(secondReq)
//     })
//     .then((dataPokemons)=>{
//       let pokemons = dataPokemons.map((obj) => obj.data)
//       const allPokemonsAPI = pokemons.map((pok)=> objectApi(pok))
//       resolve(allPokemonsAPI)
//     })
//     .catch((error)=>{
//       reject(error)
//     })
//   })
// }

const getAllPokDB = async () => { 
  try {
    const allPokemonsDB =  await Pokemon.findAll({
      //devuelve los pokemon, que incluyan del modelo Type el atributo name (join)
      include: { 
        model: Type,
        attributes: ["name"], 
      },
    });
    
    return allPokemonsDB
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  objectApi,
  getAllPokAPI,
  getAllPokDB,
};

