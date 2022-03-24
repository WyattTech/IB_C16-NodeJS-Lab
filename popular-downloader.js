const path = require("path");
const fs = require("fs"); //Core Module --file system(fs)
const request = require("request"); //request-promise didn't work from me--it's showing up deprecated on NPM website???

const dataPath = path.extname('popular-articles.json');

request("https://www.reddit.com/r/popular/.json", (err, res, body) => {
  if (err) console.log(err);



  JSON.parse(body).data.children.forEach((item) => {
    fs.appendFileSync(dataPath, item.data.url);
  });
   

});  

