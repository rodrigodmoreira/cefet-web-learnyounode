const filterFiles = require('./06.mymodule.js')
const [ path, extension ] = process.argv.slice(2)

filterFiles(path, extension, (_, data) => {
    console.log(data.join('\n'))
})
