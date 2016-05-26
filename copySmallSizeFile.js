const fs = require('fs');

let copy = (src, dst) => {
  fs.writeFileSync(dst, fs.readFileSync(src));
}

let main = (argv) => {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));