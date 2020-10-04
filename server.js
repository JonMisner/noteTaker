// Dependencies and Global Variables
// =================================
const express = require("express");
const fs = require("fs");
const path = require("path");
// const apiRoute = require("./develop/routes/apiRoute");
// const htmlRoute = require("./develop/routes/htmlRoute");


const app = express();
const PORT = process.env.PORT || 3000;

// Express Server Methods
// ======================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./develop/routes/apiRoute")(app);
require("./develop/routes/htmlRoute")(app);

// port initilization/confirmation message
app.listen(PORT, function () {
   console.log("App listening on PORT " + PORT);
});