const express = require('express')
const server = express()
const path = require('path');
require('dotenv').config();

//server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');
server.set('views', __dirname);

server.get('/', function (req, res) {
  var flag;
  var bucket = "";
  var region="";
  console.log(process.env.USER_REGION);
  if (process.env.USER_REGION =="SG")
  {
    flag = "https://storage.googleapis.com/dronegaga-web-static-files-asia/images/Flag_of_Singapore.svg"
    bucket ="https://storage.googleapis.com/dronegaga-web-static-files-asia"
    region="asia-southeast1"
  }
  else if (process.env.USER_REGION =="US")
  {
    flag = "https://storage.googleapis.com/dronegaga-web-static-files-us/images/Flag_of_the_United_States.svg"
    bucket ="https://storage.googleapis.com/dronegaga-web-static-files-us"
    region="us-central1"
  }
    res.render(path.join(__dirname, '/views', 'index'), {user_region: region, flag : flag,bucket:bucket});
});

server.get('/store', function (req, res) {
  var flag;
  var bucket = "";
  var region="";
  console.log(process.env.USER_REGION);
  if (process.env.USER_REGION =="SG")
  {
    flag = "https://storage.googleapis.com/dronegaga-web-static-files-asia/images/Flag_of_Singapore.svg"
    bucket ="https://storage.googleapis.com/dronegaga-web-static-files-asia"
    region="asia-southeast1"
  }
  else if (process.env.USER_REGION =="US")
  {
    flag = "https://storage.googleapis.com/dronegaga-web-static-files-us/images/Flag_of_the_United_States.svg"
    bucket ="https://storage.googleapis.com/dronegaga-web-static-files-us"
    region="us-central1"
  }
    res.render(path.join(__dirname, '/views', 'store'), {user_region: region, flag : flag,bucket:bucket});
});


/* route requests for static files to appropriate directory */
server.use('/', express.static(__dirname + '/'))

// /* final catch-all route to index.html defined last */
// server.get('/*', (req, res) => {
//   //res.sendFile(__dirname + '/index.html');
//   var name = 'hello';

//   res.render(__dirname + "/index.html", {name:name});
// })

const port = 8080;
server.listen(port, function() {
  console.log('server listening on port ' + port)
})