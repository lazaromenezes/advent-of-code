const rucksack = require('./rucksack')

const testRucksack = [
  ['vJrwpWtwJgWrhcsFMMfFFhFp', 'p'],
  ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'L'],
  ['PmmdzqPrVvPwwTWBwg', 'P'],
  ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'v'],
  ['ttgJtRGJQctTZtZT', 't'],
  ['CrZsJsPPZsGzwwsLwLmpwMDw', 's']
]

testRucksack.forEach((rs) => {
  test('Can find repeated items', () => {
    let repeatedItem = rucksack.findRepeated(rs[0])

    expect(repeatedItem).toEqual(rs[1])
  })
})

test('Can find repeated in group', () => {
  let group = [testRucksack[0][0], testRucksack[1][0], testRucksack[2][0]]

  let repeatedItem = rucksack.findRepeatedInGroup(group)

  expect(repeatedItem).toEqual('r')
})

const testPriorities = [
  ['p', 16],
  ['L', 38],
  ['P', 42],
  ['v', 22],
  ['t', 20],
  ['s', 19]
]

testPriorities.forEach((rs) => {
  test('Can calculate item priority', () => {
    priority = rucksack.calculatePriority(rs[0])

    expect(priority).toEqual(rs[1])
  })
})
