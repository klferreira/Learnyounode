let http = require('http');
let port = process.argv[2];

let server = http.createServer((req, res) => {
    if (req.method !== 'POST')
        return res.end('Sorry, POST only.\n');

    req.setEncoding('utf8');
    req.on('data', (chunk) => res.write(chunk.toString().toUpperCase()))
    req.on('end', () => res.end());
});

server.listen(port);