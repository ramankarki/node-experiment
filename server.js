const app = require('./app');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  },
});

const PORT = process.env.NODE_ENV || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// pm2 start server.js -l logs.txt -i max
// pm2 reload server

// using multiple socket connections with single http server
const namespace = io.of('/pong');

namespace.on('connection', (socket) => {
  // console.log('User connected -', socket.id);
  let room = 'room name';

  // custom event
  socket.on('ready', (data) => {
    console.log(data, '-', socket.id);

    socket.join(room);
  });

  setInterval(() => {
    namespace.in(room).emit('room test', 'yo xai room test garna lai data');
  }, 4000);

  socket.emit('server ready', 'server le emit gareko data');

  socket.on('disconnect', (reason) => {
    console.log(`Client ${socket.id} disconnected: ${reason}`);
    socket.leave(room);
  });
});
