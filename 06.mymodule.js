const fs = require('fs')

module.exports = (path, extension, callback) => {
    fs.readdir(path, (err, data) => {
        if (err) {
            callback(err, null)
        } else {
            callback(err, data.filter(
                f => f.match(RegExp(`\\.${extension}$`))
            ))
        }
    })
}
