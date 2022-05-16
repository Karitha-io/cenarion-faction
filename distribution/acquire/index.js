const app = require('./app')

const args = process.argv.slice(2)

let realm = 0

if (args.length < 1) {
  throw new Error('Must pass amount of REALM to distribute')
} else {
  if (isNaN(args[0])) {
    throw new Error('REALM argument must be a number')
  }

  realm = args[0]
}

const main = async (realm) => {
  await app.run(realm)
}

main(realm)
