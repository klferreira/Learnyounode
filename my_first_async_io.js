let fs = require('fs');
let path = process.argv[2];

fs.readFile(path, (err, data) => {
    if (!err) {
        let result = data.toString().split('\n').length - 1;
        console.log(result);
    }
});