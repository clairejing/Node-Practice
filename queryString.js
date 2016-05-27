const querystring = require('querystring');
let str = querystring.parse('foo=bar&baz=quux&corge');
console.log(str);

let stringify = querystring.stringify({
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: ''
});

console.log(stringify);