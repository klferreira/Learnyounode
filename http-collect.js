let http = require('http');
let url = process.argv[2];

http.get(url, (response) => {
    let string = '';
    response.setEncoding('utf8');
    response.on('error', (err) => console.error(err));
    response.on('data', (data) => string += data);
    response.on('end', () => {
        console.log(string.length)
        console.log(string);
    });
})