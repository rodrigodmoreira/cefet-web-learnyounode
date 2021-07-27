const http = require('http')
const urls = process.argv.slice(2)

let promises = []

function req(url) {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let data = ''
            res.setEncoding('utf-8')
            res.on('data', chunk => {
                data = data.concat(chunk)
            })
            res.on('end', () => {
                resolve(data)
            })
            res.on('error', err => reject(err))
        })
    })
}

for(const url of urls) {
    promises = promises.concat(req(url))
}

Promise.all(promises)
    .then(reslist => reslist.map(res => console.log(res)))
