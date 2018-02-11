let fs = require('fs');
let http = require('http');
let port = process.argv[2];
let path = process.argv[3];

var server = http.createServer((req, res) => {
    fs.createReadStream(path).pipe(res);
})

server.listen(port);