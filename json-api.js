let http = require('http');
let url = require('url');
let port = process.argv[2];

getIso = (date) => {
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
}

getUnix = (date) => {
    return {
        "unixtime": date.getTime()
    };
}

let server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let date = new Date(urlObj.query.iso);
    let result;

    if (urlObj.pathname === '/api/unixtime') {
        result = getUnix(date);
    }
    else if (urlObj.pathname === '/api/parsetime') {
        result = getIso(date);
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(422);
        res.end();
    }


}).listen(port);