const http = require('http')
const [ port ] = process.argv.slice(2)

http.createServer((req, res) => {
    if(req.method === 'POST') {
        let data = ''
        req.setEncoding('utf-8')
        req.on('data', chunk => {
            data = data.concat(chunk)
        })
        req.on('end', () => {
            res.end(data.toUpperCase())
        })
    }
}).listen(port)
