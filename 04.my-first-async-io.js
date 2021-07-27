const fs = require('fs')

const [ path ] = process.argv.slice(2)

function countLines(text) {
    let ct = 0
    for(const ch of text)
        if (ch === '\n')
            ct++
    return ct
}

fs.readFile(path, (_, data) => {
    const file = data.toString()
    console.log(countLines(file))
})
