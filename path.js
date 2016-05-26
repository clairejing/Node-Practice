//path.normalize
const path = require('path');

let cache = {};

let store = (key, value) => {
  cache[path.normalize(key)] = value;
}


store('foo/bar', 1);
store('foo//baz//../bar', 2);
console.log(cache);

let joinPath = path.join('foo/', 'baz', '../bar');
console.log(joinPath);

let extStr = path.extname('foo/bar.js');
console.log(extStr);

