const http = require('http')
const fs = require('fs')
const [ port, fpath ] = process.argv.slice(2)

http.createServer((req, res) => {
    const stream = fs.createReadStream(fpath)
    stream.pipe(res)
}).listen(port)
