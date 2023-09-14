const { ClientError } = require("../utils/errors");
const characters = require("./characters.json")

module.exports = {
    list : async () => {
        return characters;
    },
    create : async () => {
      throw new ClientError("Hay un error en DB al momento de crear el personaje", 401);
    }
};