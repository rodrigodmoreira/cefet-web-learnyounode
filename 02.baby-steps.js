const args = process.argv.slice(2)

console.log(args.reduce(
    (acc, v) => Number(acc) + Number(v),
    0
))
