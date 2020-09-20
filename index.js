const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const port = 8680;

let project = 'space-stone';

app.use('/', express.static(path.join(__dirname + '/' + project + '/src')));

server.listen(port, () => {

    console.log(`Server running on localhost:${port} and rendering ${project}`);
});