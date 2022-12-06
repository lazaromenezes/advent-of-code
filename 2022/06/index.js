const fs = require('fs').promises
const packets = require('./packets')

async function main() {
  let file = await fs.readFile('./final-input.txt')
  let messages = new String(file).trim().split('\n')
 
  messages.forEach(message => {
    let position = packets.findSignalEnd(message)
    console.log(`Signal ends at ${position}`)
  })
}

main()
