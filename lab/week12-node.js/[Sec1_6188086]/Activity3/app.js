/* Express with Routing */
const path = require('path');
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/JavaScript', function (req, res) {
    res.sendFile(path.join(__dirname + '/JavaScript.html'));
});
/* And more pages here :) */
app.get('/Node', function (req, res) {
    res.sendFile(path.join(__dirname + '/node.html'));
});
app.get('*', function(req, res){
    res.status(404).send('404 NOT FOUND');
  });
app.listen(8081);
console.log('Running at Port 8081');