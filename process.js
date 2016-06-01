/*function main(argv){
  console.log(argv);
}

console.log(process.argv);
main(process.argv.slice(2));*/


function test(){
  try{
    throw(new Error('err'));
  }catch(err){
    process.exit(1);
  }
}


