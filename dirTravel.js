const fs = require('fs');
const path = require('path');


let travel = (dir, callback, finish) => {
  fs.readdir(dir, (err, files) => {
    (function next(i) {
      if(i < files.length) {
        let pathname = path.join(dir, files[i]);

        fs.stat(pathname, (err, stats) => {
          if(stats.isDirectory()){
            travel(pathname, callback, () => {
              next(i+1);
            });
          }else{
            callback(pathname, () => {
              next(i+1);
            });
          }
        });
      }else{
        finish && finish();
      }
    })(0);
  });
}



/*let travel = (dir, callback) => {
  fs.readdirSync(dir).forEach((file) => {
    let pathname = path.join(dir, file);

    if(fs.statSync(pathname).isDirectory()){
      travel(pathname, callback);
    }else{
      callback(pathname);
    }
  });
}
*/

travel('./home/user', (pathname) => {
  console.log(pathname);
});