// Dependencies and Global Variables
// =================================
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();


// HTML Routes
// ===========
const htmlRoute = function(app) {
// return notes
   app.get("/notes", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
   });

   app.get("/styles", function(req, res){
      res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
   });

   // return index
   app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
   });
};

// Export
// ======
module.exports = htmlRoute;