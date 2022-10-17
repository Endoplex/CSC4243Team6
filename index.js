const express = require("express");

 
const app = express()
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Starting Server on Port: " + PORT);

});
