const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');
const port = process.env.PORT;
express()
  .use(cors({options: "https://xenodochial-varahamihira-6786dc.netlify.app/"}))

  .get("/", (req, res) => res.send("<html><body><h1>HEY</h1></body></html>"))

  .listen(port);
