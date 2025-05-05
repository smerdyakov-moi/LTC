const fs = require('node:fs'); 
fs.rename('2.txt','intro.txt', function(err){
    (err)? console.error(err) : console.log("done")
})
