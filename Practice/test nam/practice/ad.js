/* File System Module */
const fs = require("fs");
/* Append the new text to the existing file */
fs.writeFile("myNewFile.txt", "Hello", function (err) {
    if (err) throw err;
    console.log("File created!!");
});
/* Append the new text to the existing file */
fs.appendFile("myNewFile.txt", " World!", function (err) {
    if (err) throw err;
    console.log("New text saved!!");
});
fs.readFile('myNewFile.txt', "utf8", function (err, data) {
    console.log(data)
})
/* Read file + console.log to see contents */