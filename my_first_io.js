let fs = require('fs')
let path = process.argv[2];

let result = fs.readFileSync(path).toString().split('\n');

console.log(result.length - 1);
