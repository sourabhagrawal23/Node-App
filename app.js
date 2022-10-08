const http = require('http');

//this function will run for every request that reaches our server
function rqListener(req,res) {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type','text/html');
    res.write("<HTML>");
    res.write("<Head><Title></Title></Head>");
    res.write("<body><h1>Hello from my Node.js server!</h1></body>");
    res.write("</HTML>");
    res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);