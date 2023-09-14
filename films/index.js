const server = require("./src/server.js");

server.listen(8002, () => {
  console.log("Characters service listening on port 8002");
});
