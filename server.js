const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');
const colors = require('colors/safe');

const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url);
    let file = urlObj.pathname === '/' ? '/html/dp.html' : urlObj.pathname;
    console.log(`${req.method} ${file}`);
    fs.stat(path.join(__dirname, file), (err, stats) => {
        if (err || !stats.isFile()) file = '/html/404.html';
        console.log(colors.green(file));
        let rs = fs.createReadStream(path.join(__dirname, file));
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