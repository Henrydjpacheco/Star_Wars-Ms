const mongoose = require('mongoose');

const conn = mongoose.createConnection("mongodb+srv://AurelioBaldor:7e6rngm83BFfqoid@cluster0.sl3yr0z.mongodb.net/star_wars");


module.exports = {
    Character:  conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetShema"))
}