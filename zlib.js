const http = require('http');
const zlib = require('zlib');

let server = http.createServer((req, res) => {
  let i = 1024,
  data = '';

  while(i--){
    data += '.';
  }

  if((req.headers['accept-encoding'] || '').indexOf('gzip') !== -1)
    zlib.gzip(data, (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-encoding': 'gzip'
      });
      res.end(data);
    });
  else{
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(data);
  }
}).listen(80);