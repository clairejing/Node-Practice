const fs = require('fs');

const rs = fs.createReadStream(src);
const ws = fs.createWriteStream(dst);

rs.on('data', (chunk) => {
  if(ws.write(chunk) === false){
    rs.pause();
  }
});

rs.on('end', () => {
  ws.end();
});

ws.on('drain', () => {
  rs.resume();
});

/*rs.on('data', (chunk) => {
  ws.write(chunk);
});

rs.on('end', () => {
  ws.end();
})
*/

/*let rs = fs.createReadStream(pathname);

rs.on('data', (chunk) => {
  rs.pause();
  doSomething(chunk, () => {
    rs.resume();
  });
});

rs.on('end', () => {
  cleanUp();
});
*/

/*rs.on('data', (chunk) => {
  //doSomething(chunk);
});

rs.on('end', () => {
  //cleanUp();
});
*/
