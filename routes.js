const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.write("<HTML>");
        res.write("<Head><Title>Enter Message</Title></Head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></form></body>');
        res.write("</HTML>");
        return res.end();
    }    

    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
    }

    
    res.setHeader('Content-Type','text/html');
    res.write("<HTML>");
    res.write("<Head><Title></Title></Head>");
    res.write("<body><h1>Hello from my Node.js server!</h1></body>");
    res.write("</HTML>");
    res.end();
};

module.exports = requestHandler;