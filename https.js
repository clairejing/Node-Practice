const fs = require('fs');
/*
let options = {
  key: fs.readFileSync('./ssl/default.key');
  cert: fs. readFileSync('./ssl/default.cer');
};


let server = https.createServer(options, (req, res) => {
  // ...
});

server.addContext('foo.com', {
  key: fs.readFileSync('./ssl/foo.com.key'),
  cert: fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
  key: fs.readFileSync('./ssl/bar.com.key'),
  cert: fs.readFileSync('./ssl/bar.com.cer')
});
*/

let options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/',
  method: 'GET'
};

let req = https.request(options, (res) => {

});

request.end();