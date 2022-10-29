const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.PORT;

// Used for communication between url
app.use(cors());
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Yeaahh, It's Working! ");
});

const io = socketIO(server);
io.on("connection", () => {
  console.log("New Connection");
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
