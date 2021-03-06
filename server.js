const app = require("express")();
const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer, {
            cors: {
             origin: "http://localhost:3000",
             methods: ["GET", "POST"]
         } 
        });

httpServer.listen(8005, () => {
    console.log('listening to port 8005')
});

const Redis = require('ioredis');
const redis = new Redis();
let users = [];


 redis.subscribe('message', function() {
     console.log('subscribed to message channel');
 });

 redis.on('message', function(channel, message) {
     message = JSON.parse(message);
    if (channel === 'message') {
        let participants = message.data.thread.participants;

        // io.on('connection', async (socket) => {
        //   const userId = await fetchUserId(socket);
        
        //   socket.join(userId);
        
        //   // and then later
        //   io.to(userId).emit('hi');
        // });
      participants.forEach(participant => {
        io.to(`${users[participant.user_id]}`).emit(channel + ':' + message.event, message.data);
     });

    } });

 io.on('connection', function (socket) {
    socket.on("user_connected", function (user_id) {
    users[user_id] = socket.id;
      io.emit('updateUserStatus', users);
        console.log("user connected "+ user_id);
});

  socket.on('disconnect', function() {
     var i = users.indexOf(socket.id);
        users.splice(i, 1, 0);
        io.emit('updateUserStatus', users);
        console.log(users);
    });
 });
