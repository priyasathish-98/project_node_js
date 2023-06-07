import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
// const path = require('path');

// const port = 3000
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.get("/", function(req, res){
  // res.sendFile("index.html", {root: path.join(__dirname)});
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});