const express = require("express");
const cors = require("cors");
const path = require('path'); 
const fs = require('fs');
const parse = require("node-html-parser");
const fetch = require("node-fetch");
const port = process.env.PORT;

var files;
/*
fs.readdirSync("./accessible/").forEach(file => {
  //const file = parse();
  files.append(file);
});
*/
files = fs.readdirSync("./accessible/");
files = fs.readFileSync("./" + files[0], "utf-8");

express()
  .get("/*", (req, res) => {
    res.send(files);
    //res.send("I DO WORK I SWEAR");
  })

  .listen(port);
