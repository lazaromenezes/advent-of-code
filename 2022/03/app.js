const rucksack = require('./rucksack')

function priority(rucksacks) {
  return rucksacks
    .map((r) => rucksack.findRepeated(r))
    .map((r) => rucksack.calculatePriority(r))
    .reduce((total, value) => total += value, 0)
}

module.exports = {priority}
