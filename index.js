const express = require("express");
const cors = require("cors");
const path = require('path'); 
const fetch = require('node-fetch');
const port = process.env.PORT;
express()
  .get("/", (req, res) => res.sendFile("./index.html", {root: path.join(__dirname)}))

  .listen(port);
