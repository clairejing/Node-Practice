function main(argv){
  let config = JSON.parse(fs.readFileSync(argv[0], 'utf-8'));
  let root = config.root || '.';
  let port = config.port || 80;

  http.createServer((req, res) => {
    let urlInfo = parseURL(root, req.url);

    validateFiles(urlInfo.pathnames, (err, pathnames) => {
      if(err){
        res.writeHead(404);
        res.end(err.message);
      }else{
        res.writeHead(200, {
          'Content-Type': urlInfo.mime
        });
        outputFiles(pathnames, res);
      }
    })
  }).listen(port);
}

function outputFiles(pathnames, writer){
  (function next(i, len){
    if(i < len){
      let reader = fs.createReadStream(pathnames[i]);

      reader.pipe(writer, {end: false});
      reader.on('end', () => {
        next(i+1, len);
      });
    }else{
      writer.end();
    }
  }(0, pathnames.length));
}

