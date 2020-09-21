// Dependencies and Global Variables
// =================================
const express = require("express");
const fs = require("fs");
const path = require("path");


// HTML Routes
// ===========
const routeHTML = function() {
// return notes
   app.get("/notes", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
   });

// return index
   app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
   });
}

// Export
// ======
modules.export = routeHTML;