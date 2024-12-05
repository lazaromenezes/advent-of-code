import { firstSolution, secondSolution } from './solution'

describe("Day 4", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/04/test-input.txt')
    
            expect(solution).toBe(18)
        })
    })

    describe("Second part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await secondSolution('src/04/test-input.txt')
    
            expect(solution).toBe(9)
        })
    })
})