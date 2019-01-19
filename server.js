const express = require("express");
const request = require("request");
const proxy = require("http-proxy-middleware");
const app = express();

app.use(express.static(__dirname));

app.use(
 "/movie",
 proxy({
   target: "http://18.217.66.137"
 })
);

let port = 3000 || process.env.PORT; //Switched around
app.listen(port, () => console.log("Server listening on port " + port));