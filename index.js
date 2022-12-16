import fs from "fs";
import http from "http";
import path from "path";

const dir = path.resolve();

http.createServer((req, res) => {
    fs.readFile(dir + req.url, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404: File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(8001);