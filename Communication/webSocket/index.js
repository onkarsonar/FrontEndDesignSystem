const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server); // ✅ Attach Socket.IO to server

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html')); // Fixed path join
});

io.on('connection', (socket) => {
  console.log('Connection established');

  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
