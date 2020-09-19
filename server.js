// Dependencies and Global Variables
// =================================
const express = require("express");
const fs = require("fs");

const app = express
const PORT = 3000

// Express Server Methods
// ======================

app.request(express.urlencoded({extend:true}));
app.request(express.json());

// port initilization/confirmation message
app.listen(PORT, function () {
   console.log("App listening on PORT " + PORT);
});