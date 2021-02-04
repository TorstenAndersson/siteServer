const express = require("express");
const cors = require("cors");
const path = require('path'); 
const fetch = require('node-fetch');
const port = process.env.PORT;
express()
  .get("/*", (req, res) => {
    res.sendFile(req.path, {root: path.join(__dirname, "accessible")});
  })

  .listen(port);
