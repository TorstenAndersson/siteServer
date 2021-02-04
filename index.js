const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');
const port = process.env.PORT;
express()
  .get("/", (req, res) => res.sendFile("./index.html"))

  .listen(port);
