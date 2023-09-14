const films = require("./films.json");

module.exports = {
  list: async () => {
    return films;
  },
  create: async () => {
    throw new Error("Hay un error en DB al momento de crear el film");
  },
};
