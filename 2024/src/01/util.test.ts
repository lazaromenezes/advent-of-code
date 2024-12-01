import {calculateDifference, calculateScores, parse} from './util'

test('parser returns two sorted list of integers', () => {
    const input = `3   4\n4   3\n`

    const data = parse(input)

    expect(data).toEqual([[3, 4], [3, 4]])
})

test('calculate the absolute difference returns an array with the difference between two itens', () => {
    const left = [3, 4]
    const right = [1, 6]

    const difference = calculateDifference(left, right)

    expect(difference).toEqual([2, 2])
})

test('calculate the score for the given inputs', () => {
    const left = [3, 4, 3, 2]
    const right = [3, 3, 4, 5]

    const difference = calculateScores(left, right)

    expect(difference).toEqual([6, 4, 6, 0])
})