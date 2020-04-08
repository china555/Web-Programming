const http = require("http");
const fs = require("fs");
const {
    promisify
} = require("util");

// convert callback To Async
// const readAsync = promisify(fs.readFile);

// convert CB to Async with promise
const readAsync = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

const server = async () => {
    const html = await readAsync("index.html");
    console.log(html.length);
    http
        .createServer((req, res) => {
            res.writeHead(200, {
                "Content-Length": html.length,
                "Content-Type": "text/html"
            });
            res.end(html);
        })
        .listen(3030);
};

server();