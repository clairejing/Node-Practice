const fs = require('fs');

fs.readFile(pathName, (err, data) => {
  if(err){
    //deal with error
  }else{
    //deal with data
  }
});


try{
  let data = fs.readFileSync(pathName);
}catch(err){
  //deal with error
}