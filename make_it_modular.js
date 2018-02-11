var module = require('./module');
let path = process.argv[2];
let ext = process.argv[3];

module(path, ext, (err, data) => {
    if (err) console.error(err);

    data.forEach(file => console.log(file));
});