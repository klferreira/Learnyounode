let http = require('http');
let url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    })
})