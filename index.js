const express = require("express");
const cors = require("cors");
const path = require('path'); 
const fs = require('fs');
const parser = require("node-html-parser");
const fetch = require("node-fetch");
const port = process.env.PORT;

var files = "";
fs.readdirSync("./accessible/").forEach(file => {
  if (file.endsWith(".html")) {
    const parsedContent = parser.parse(fs.readFileSync("./" + file, "utf-8"));
    parsedContent.querySelector("h1").innerHTML = "NEJ JAG HEJAR PÅ ER";
    eval("var " + file.slice(0, -5) + '=""');// + parsedContent.toString().replace("\n", "") + '";')
  }
  //files.append(file);
});

/*
files = fs.readdirSync("./accessible/");
files = fs.readFileSync("./" + files[0], "utf-8");
*/

express()
  .get("/*", (req, res) => {
    res.send(index.js);
    //res.send("I DO WORK I SWEAR");
  })

  .listen(port);
