
// Module imports
const http = require('http');


const host = "localhost";
const port = 5000;

const requestListener = (req,res) => {

    res.writeHead(200);
    res.end("This is a basic Node.JS server!");

}

const server = http.createServer(requestListener);


server.listen(port, ()=>{
    console.log(`Server is running on..  http://${host}:${port}`);


})