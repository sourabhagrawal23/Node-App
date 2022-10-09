const http = require('http');

const routes = require('./routes');

//this function will run for every request that reaches our server
// function rqListener(req,res) {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

// }

const server = http.createServer(routes);

server.listen(3000);