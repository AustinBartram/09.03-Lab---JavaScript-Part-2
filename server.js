
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();


// The static files will be served at the root URL (e.g., http://localhost:8080/)
app.use(express.static(__dirname + '/dist'));

// serve index.html for the root path
app.get("/", function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

// accessed at http://localhost:8080/hello
// and will respond with "Hello World, from the server!"
app.get("/hello", function (request, response) {
    response.send("Hello World, from the server!");
});

app.listen(port);
console.log("server started on port " + port);