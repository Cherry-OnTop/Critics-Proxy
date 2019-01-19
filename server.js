const express = require("express");
const proxy = require("http-proxy-middleware");
const app = express();

app.use(express.static(__dirname));

app.use("/movie", proxy({
  target: "18.217.66.137"
}));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server listening on port " + port));
