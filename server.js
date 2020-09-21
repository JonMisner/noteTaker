// Dependencies and Global Variables
// =================================
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express
const PORT = 3000

// Express Server Methods
// ======================
app.request(express.urlencoded({extend:true}));
app.request(express.json());
app.use(express.static(path.join(__dirname, "./public")));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// port initilization/confirmation message
app.listen(PORT, function () {
   console.log("App listening on PORT " + PORT);
});