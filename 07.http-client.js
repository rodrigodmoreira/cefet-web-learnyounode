const http = require('http')
const [ url ] = process.argv.slice(2)

http.get(url, res => {
    res.setEncoding('utf-8')
    res.on('data', chunk => console.log(chunk))
})
