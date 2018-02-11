let net = require('net');
let port = process.argv[2];

function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return year + '-' + 
        (month > 9 ? month : '0' + month) + '-' + 
        (day > 9 ? day : '0' + day) + ' ' +
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + '\n';
}

let server = net.createServer((socket) => {
    let date = formatDate(new Date());
    socket.end(date)
});

server.listen(port);

