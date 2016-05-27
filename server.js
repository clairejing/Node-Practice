const http = require('http');

let server = http.createServer((request, response) => {
response.writeHead(200, {'Content-Type': 'text-plain' });

request.on('data', (chunk) => {
  response.write(chunk);
});

request.on('end', () => {
  response.end();
});
});

server.listen(80);