const http = require('http')
const [ port ] = process.argv.slice(2)

http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`)
    switch(url.pathname) {
        case '/api/parsetime': {
            let date = new Date(url.searchParams.get('iso'))
            console.log(url.searchParams.get('iso'))
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }))
            break
        }
        case '/api/unixtime': {
            let date = new Date(url.searchParams.get('iso'))
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({
                unixtime: date.getTime()
            }))
            break
        }
    }
}).listen(port)
