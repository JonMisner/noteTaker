const express = require("express");

const app = express
const PORT = 3000

app.request(express.urlencoded({extend:true}));
app.request(express.json());

app.listen(PORT, function () {
   console.log("App listening on PORT " + PORT);
});