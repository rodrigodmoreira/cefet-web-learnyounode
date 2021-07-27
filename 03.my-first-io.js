const fs = require('fs')

const [ path ] = process.argv.slice(2)

const data = fs.readFileSync(path)
const file = data.toString()

function countLines(text) {
    let ct = 0
    for(const ch of text)
        if (ch === '\n')
            ct++
    return ct
}

console.log(countLines(file))
