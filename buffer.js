// const bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

// console.log(bin[0]);
// console.log(bin.length);

// const str = bin.toString('utf-8');
// console.log(str);

// let bin2 = new Buffer('hello','utf-8');
// console.log(bin2);

// let sub = bin.slice(2);
// console.log(bin);
// sub[0] = 0x65;
// console.log(bin);

let bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
let dup = new Buffer(bin.length);

bin.copy(dup);
dup[0] = 0x48;
console.log(bin);
console.log(dup);