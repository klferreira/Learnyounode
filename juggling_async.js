let http = require('http');
let endpoints = [];
let requestsReturned = 0;

for (let i = 2; i < process.argv.length; i++) {
    endpoints.push({ url: process.argv[i], data: '' });
}

endpoints.forEach(endpoint => {
    
    http.get(endpoint.url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => endpoint.data += chunk);
        response.on('end', () => onRequestComplete());
    })
})

function onRequestComplete() {
    requestsReturned++;
    if (requestsReturned === endpoints.length) {
        endpoints.forEach(endpoint => console.log(endpoint.data))
    }
}