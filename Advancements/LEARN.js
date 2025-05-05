const fs = require('node:fs'); 
const { constants } = require('node:fs');

var content=fs.readFileSync(".\\happy\\jr.txt", 'utf8', function(err, data) {
});
console.log(content)