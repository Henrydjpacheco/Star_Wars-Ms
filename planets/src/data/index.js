const planets = require("./planets.json");
const axios = require("axios");
module.exports = {
  list : async () => {
    const {data} = await axios.get("http://database:8004/Planet")
      return data;
  },
  create: async () => {
    throw new Error("Hay un error en DB al momento de crear el planeta");
  },
};
