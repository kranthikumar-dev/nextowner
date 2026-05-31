import "dotenv/config";

import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
