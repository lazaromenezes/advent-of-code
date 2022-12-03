const fs = require('fs').promises
const app = require('./app')

async function main() {
  let file = await fs.readFile('./final-input.txt')
  let rucksacks = new String(file).split('\n')
  
  let priority = app.priority(rucksacks.filter((r) => r != ''))

  console.log(priority)
}

main()
