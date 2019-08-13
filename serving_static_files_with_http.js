const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    //const readStream = fs.createReadStream('./static/variant.html');
    const readStream = fs.createReadStream('./static/prashant3.png');
    //res.writeHead(200, { 'Content-type': 'text/html' })
    //res.writeHead(200, { 'Content-type': 'application/json' });
    res.writeHead(200, { 'Content-type': 'image/png' })
    readStream.pipe(res);
}).listen(3000)