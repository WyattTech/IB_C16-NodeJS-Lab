/* Part One */

const path = require('path'); //Getting the core modules path and file-->I"Importing" step--exist in Node without needing to download
const fs = require('fs');
// const request = require('request');

let dataPath = (path.join(__dirname,'../chirps.json'));//Get the path of the file I need to read--grab this file--constructs the path to the file

fs.readFile(dataPath, {
    encoding: "UTF-8", //readFile--> Here we are passing in the path to file we need to read, telling what it what kind of encoding
}, (err, data) =>{  //We set up a callback to catch errors, and call the content into a variable
   console.log(data);//Display content in the console after its read the file.
});


