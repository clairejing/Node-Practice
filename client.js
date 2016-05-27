const http = require('http');

let options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  }
};

let request = http.request(options, (response) => {

});

request.write('Hello world');
request.end();