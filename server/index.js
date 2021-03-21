const express = require("express");
const http = require("http");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("we have a new connection");
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

  });
  socket.on("disconnect", () => {
    console.log("user had left");
  });
});

app.use(router);
server.listen(PORT, () => console.log(`server is runnig on port:${PORT}`));
