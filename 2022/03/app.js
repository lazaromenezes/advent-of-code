const rucksack = require('./rucksack')

function priority(rucksacks) {
  return rucksacks
    .map((r) => rucksack.findRepeated(r))
    .map((r) => rucksack.calculatePriority(r))
    .reduce((total, value) => total += value, 0)
}

function badgePriority(rucksacks) {

  let sum = 0
  let i = 0

  const groupSize = 3

  do{
    let group = []

    for(j = 0; j < groupSize; j++)
      group.push(rucksacks[i++])

    let badge = rucksack.findRepeatedInGroup(group)

    sum += rucksack.calculatePriority(badge)
  }while(i < rucksacks.length)

  return sum
}

module.exports = {priority, badgePriority}

