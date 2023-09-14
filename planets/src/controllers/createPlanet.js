const Planet = require('../data');
const {response} = require('../utils');

module.exports = async (res, req) => {
  const newPlanet = await Planet.create();
  response(res, 201, newPlanet );

};
