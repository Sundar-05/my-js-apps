
// Module imports
const http = require('http');
const express = require("express");
const router = express.Router();
const path = require("path");


// Express app initilized
const app = express();

// Variable declarations
const host = "localhost";
const port = 5000;

// Middleware fn
const midlware = (req,res,next) => {

    console.log(`Middleware function accessed at time ${new Date().toLocaleString()}`);
    next();
};

// App using the above middleware
app.use(midlware);


// Setting template views

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine","html");


// App endpoint

app.get("/", (req,res)=>{

    res.render("index");

});



app.listen(port, ()=>{
    console.log(`Spl-server is running on http://${host}:${port}.......`);
});