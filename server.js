const app = require("express")();
const { readFileSync } = require("fs");

let httpServer;

if (process.env.NODE_ENV == "production") {
  httpServer = require("https").createServer(
    {
      key: readFileSync(process.env.SSL_KEY),
      cert: readFileSync(process.env.SSL_CERT),
      requestCert: false,
    },
    app
  );
} else {
  httpServer = require("http").createServer(app);
}

const origin =
  process.env.NODE_ENV == "production"
    ? "https://funconnect.net"
    : "http://localhost:3000";

const host =
  process.env.NODE_ENV == "production" ? "funconnect.net" : "127.0.0.1";

const io = require("socket.io")(httpServer, {
  cors: {
    origin: origin,
    methods: ["GET", "POST"],
  },
});

httpServer.listen(8005, host, () => {
  console.log("listening to port 8005");
});

const Redis = require("ioredis");
const redis = new Redis();
let users = [];

redis.subscribe("message", function () {
  console.log("subscribed to message channel");
});

redis.on("message", function (channel, message) {
  message = JSON.parse(message);
  if (channel === "message") {
    let participants = message.data.thread.participants;

    participants.forEach((participant) => {
      io.to(`${users[participant.user_id]}`).emit(
        channel + ":" + message.event,
        message.data
      );
    });
  }
});

io.on("connection", function (socket) {
  socket.on("user_connected", function (user_id) {
    users[user_id] = socket.id;
    io.emit("updateUserStatus", users);
    console.log("user connected " + user_id);
  });

  socket.on("disconnect", function () {
    var i = users.indexOf(socket.id);
    users.splice(i, 1, 0);
    io.emit("updateUserStatus", users);
    console.log(users);
  });
});
