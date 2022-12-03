const fs = require('fs').promises
const app = require('./app')

async function main() {
  let file = await fs.readFile('./final-input.txt')
  let rucksacks = new String(file).split('\n')
 
  rucksacks = rucksacks.filter((r) => r != '')

  let priority = app.priority(rucksacks)
  let badge = app.badgePriority(rucksacks)

  console.log(`Item priority ${priority}. Badge priority ${badge}`)
}

main()
