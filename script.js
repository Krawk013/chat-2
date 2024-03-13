// Socket.IO connection

const socket = io();

// UI elements
const output = document.querySelector('#output');
const messageInput = document.querySelector('#message');
const sendBtn = document.querySelector('#send');
const usernameInput = document.querySelector('#username');
const roomList = document.querySelector('#room-list');

// Join chatroom
usernameInput.addEventListener('change', () => {
  const username = usernameInput.value;
  socket.emit('join', username);
});

// Send message
sendBtn.addEventListener('click', () => {
  const message = messageInput.value;
  socket.emit('send message', message);
  messageInput.value = ''; 
});

// Output messages
socket.on('new message', (data) => {
  // Append new message
  const item = document.createElement('p');
  item.innerHTML = `<span>${data.username}:</span> ${data.message}`;
  output.appendChild(item);
});

// Room handling
