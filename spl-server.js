
// Module imports
const http = require('http');
const express = require("express");


// Express app initilized
const app = express();

// Middleware for the app
app.use(express.json());

const host = "localhost";
const port = 5000;

app.get("/basicGET", (req,res)=>{

    console.log("GET request made to basicGET route!");
    res.send("This is the Spl Express server!")

});

app.listen(port, ()=>{
    console.log(`Spl-server is running on http://${host}:${port}.......`);
});