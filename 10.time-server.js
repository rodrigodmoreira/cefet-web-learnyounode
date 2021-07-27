const net = require('net')
const [ port ] = process.argv.slice(2)

net.createServer(socket => {
    const date = new Date()

    const dateStr = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    const timeStr = `${date.getHours()}:${date.getMinutes()}`
    socket.end(`${dateStr} ${timeStr}\n`)
}).listen(port)
