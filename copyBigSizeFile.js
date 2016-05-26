const fs = require('fs');

let copy = (src, dst) => {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

let main = (arg) => {
  copy(arg[0], arg[1]);
}

main(process.argv.slice(2));