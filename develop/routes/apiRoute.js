// Dependencies and Global Variables
// =================================
const express = require("express");
const fs = require("fs");
const db = require("../db/db.json");
// const { v4: uuidv4 } = require('uuid');

const app = express();
// Api Routes
// ==========
const apiRoute = function (app) {
   // Get
   app.get("/api/notes", function(req, res) {
      // fs.readFile("../db/db.json", "utf8");
      res.send(db);
   });

   // Post
   app.post("/api/notes", function(req, res) {
      const note = req.body;
      let title = note.title;
      let text = note.text;
      let noteID = (db.length.toString());
      note.id = noteID;
      db.push(note);
      res.send(note);
   });

// Delete
app.delete("/api/notes/:id", function(req, res) {
   const id = request.params.id
  for (var i=0; i<db.length; i++) {
     if (db[i].id === id) {
        res.send(db[i]);
        db.splice(i,1);
     }
  }
});
};

// Export
// ======
module.exports = apiRoute;