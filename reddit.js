/* Part Two */

const path = require("path");
const fs = require("fs"); //Core Module --file system(fs)
const request = require("request"); //request-promise didn't work from me--it's showing up deprecated on NPM website???

const dataPath = path.join(__dirname, "popular-articles.json");

request("https://www.reddit.com/r/popular/.json", (err, res, body) => {
  if (err) console.log(err);

//   fs.writeFile(dataPath, res.body, err => {  //returns ALL the data unformatted 
//     if(err) console.log(err);
// });

  JSON.parse(body).data.children.forEach((item) => {
    fs.appendFileSync(dataPath, `Article: ${item.data.title}  \n  Author: ${item.data.author}  \n   URL: ${item.data.url}  \n`);
  });
   

});  
