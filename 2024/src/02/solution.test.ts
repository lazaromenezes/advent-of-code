import { firstSolution, secondSolution } from './solution'

describe("Day 2", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/02/test-input.txt')
    
            expect(solution).toBe(2)
        })
    })

    describe("Second part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await secondSolution('src/02/test-input.txt')
    
            expect(solution).toBe(4)
        })
    })
})