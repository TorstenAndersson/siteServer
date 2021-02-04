const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');
const indexFile = require('./index.html')
const port = process.env.PORT;
express()
  .use(cors({options: "https://xenodochial-varahamihira-6786dc.netlify.app/"}))

  .get("/", (req, res) => res.send(indexFile))

  .listen(port);
