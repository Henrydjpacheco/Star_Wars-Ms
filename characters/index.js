const server = require("./src/server.js");

server.listen(8001, () => {
  console.log("Characters service listening on port 8001");
});
