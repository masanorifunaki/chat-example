'use strict';

const app = require('express')();
const http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(8000, function () {
    console.log('listening on *:8000');
});