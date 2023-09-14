const planets = require("./planets.json");

module.exports = {
  list: async () => {
    return planets;
  },
  create: async () => {
    throw new Error("Hay un error en DB al momento de crear el planeta");
  },
};
