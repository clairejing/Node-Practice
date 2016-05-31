function main(argv){
  console.log(argv);
}

console.log(process.argv);
main(process.argv.slice(2));