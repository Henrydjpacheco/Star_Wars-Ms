const { catchedAsync } = require("../utils");
module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
};

//exportamos como una propiedad de lo que exporta  modulo  indexjs
