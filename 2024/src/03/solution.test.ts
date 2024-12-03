import { firstSolution, secondSolution } from './solution'

describe("Day 3", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/03/test-input.txt')
    
            expect(solution).toBe(161)
        })
    })

    describe("Second part", () => {
        it('Should give sample output with test-input2', async () => {
            var solution = await secondSolution('src/03/test-input2.txt')
    
            expect(solution).toBe(48)
        })
    })
})