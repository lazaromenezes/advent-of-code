const fs = require('fs').promises
const packets = require('./packets')

async function main() {
  let file = await fs.readFile('./final-input.txt')
  let signals = new String(file).trim().split('\n')
 
  signals.forEach(signal => {
    let packet = packets.findSignalEnd(signal)
    let message = packets.findSignalEnd(signal, 14)
    console.log(`Packet at ${packet}. Message at ${message}`)
  })
}

main()
