const fs = require('fs').promises
const app = require('./app')

test('End to end app test - item priority', async () => {
  let file = await fs.readFile('./test-input.txt')
  let rucksacks = new String(file).split('\n')
  
  let priority = app.priority(rucksacks.filter((r) => r != ''))

  expect(priority).toEqual(157)
})

test('End to end app test - badge priority', async () => {
  let file = await fs.readFile('./test-input.txt')
  let rucksacks = new String(file).split('\n')
  
  let priority = app.badgePriority(rucksacks.filter((r) => r != ''))

  expect(priority).toEqual(70)
})
