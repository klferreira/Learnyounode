let fs = require('fs');
let path = require('path');

function filterByExtension(files, ext) {
    ext = ext[0] !== '.' ? '.' + ext : ext;
    return files.filter(file => path.extname(file) === ext);
}

module.exports = (path, ext, callback) => {

    fs.readdir(path, (err, files) => {
        if (err) return callback(err)
        
        let data = filterByExtension(files, ext);
        callback(null, data);
    })

}