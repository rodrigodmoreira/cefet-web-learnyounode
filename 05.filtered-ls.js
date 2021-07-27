const fs = require('fs')
const [path, extension] = process.argv.slice(2)

fs.readdir(path, (_, data) => {
    console.log(
        data.filter(
            f => f.match(RegExp(`\\.${extension}$`))
        ).join('\n')
    )
})
