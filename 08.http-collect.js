const http = require('http')
const [ url ] = process.argv.slice(2)

http.get(url, res => {
    let data = ''
    res.setEncoding('utf-8')
    res.on('data', chunk => {
        data = data.concat(chunk)
    })
    res.on('end', () => {
        console.log(data.length)
        console.log(data)
    })
})
