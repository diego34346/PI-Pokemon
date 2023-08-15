require("dotenv").config();
const { URL_API_TYPE } = process.env;
const { Type } = require("../db");
const axios = require("axios");


const arrayTypes = (array) => {
  const types = array.map((type) => type.name);
  return types;
};

const typesGet = async () => {
  try {
    const typesDB = await Type.findAll({
      attributes: ["name"],
    });
    if (typesDB.length === 0) {
      const typesAPI = await axios.get(URL_API_TYPE);
      let createTypesDB = typesAPI.data.results.map((type) => Type.create({ name: type.name })); 
      
      // console.log(createTypesDB)
      createTypesDB = await Promise.all(createTypesDB);

      const getTypesAPI = arrayTypes(createTypesDB);
      console.log("API");
      return getTypesAPI;
      
    } else {
        const getTypesDB = arrayTypes(typesDB);
        console.log('DB')
        return getTypesDB;
    }
  } catch (error) {
    console.log(error);
    return error.message
  }
};

const routeGetTypes = async (req, res) => {
  try {
    const getAllTypes = await typesGet();
    getTypesFilter = getAllTypes.filter(type => type !== "unknown" && type !== "shadow")
    return res.status(200).json(getTypesFilter);
  } catch (error) {
    return res.status(400).json("types not found");
  }
};

module.exports = {
  routeGetTypes
};
