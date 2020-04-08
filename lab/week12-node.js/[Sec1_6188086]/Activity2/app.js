// const http = require("http");
// const fs = require('fs');

// http.createServer(function (request, response) {
//     // Send the HTTP header
//     if (request.url === "/") {
//         fs.readFile('index.html',(err, data) => {
//             response.statusCode = 200;
//             response.setHeader("Content-Type", "text/html");
//             response.write(data);
//         })
//     }
//     else if (request.url === "/JavaScrip") {
//         fs.readFile('JavaScrip.html', (err, data) => {
//             response.writeHead(200, {
//                 "Content-Length": length,
//                 "Content-Type": "text/html"
//             })
//         })
//     }
//     response.end(); // End the response
// }).listen(8081);;
// // Logging in the console
// console.log("Server running at http://localhost:8081/");
/* HTTP Module with Routing */
const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    if (req.url === "/") {
        /* Render the default page */
        fs.readFile("./index.html", function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/JavaScript") {
        /* Render the shabu page */
        fs.readFile("./JavaScript.html", function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (req.url === "/Node") {
        fs.readFile('./node.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        })
    } else {
        res.statusCode = 404;
        res.write("Invalid Codeeeeeeee!!!!!!!!!!!!");
    } /* Render the remaining pages */
}).listen(8081);