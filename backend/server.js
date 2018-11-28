const app = require("./app");
const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || "3000";

app.set("port", port);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});