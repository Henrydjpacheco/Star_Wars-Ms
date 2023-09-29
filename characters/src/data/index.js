const axios = require("axios");
const { ClientError } = require("../utils/errors");
const characters = require("./characters.json");


module.exports = {
    list : async () => {
      const {data} = await axios.get("http://database:8004/Character")
        return data;
    },
    create : async () => {
      throw new ClientError("Hay un error en DB al momento de crear el personaje", 401);
    }
};