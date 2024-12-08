import { firstSolution, secondSolution } from './solution'

describe("Day 6", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/06/test-input.txt')
    
            expect(solution).toBe(41)
        })
    })

    describe("Second part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await secondSolution('src/06/test-input.txt')
    
            expect(solution).toBe(6)
        })
    })
})