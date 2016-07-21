const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');
const colors = require('colors');

const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url);
    let file = urlObj.pathname === '/' ? '/html/dp.html' : urlObj.pathname;
    console.log(`${req.method} ${file}`);
    let rs = fs.createReadStream(path.join(__dirname, file));
    rs.on('error', (err) => {
        let errorpage = path.join(__dirname, '/html/404.html');
        res.writeHead(404, {
            'Content-Type': mime.lookup(errorpage)
        });
        fs.createReadStream().pipe(res);
    });
    rs.on('end', () => {
        res.writeHead(200, {
            'Content-Type': mime.lookup(file)
        });
        rs.pipe(res);
    });
});

server.listen(3000, '127.0.0.1', () => {
    let address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});