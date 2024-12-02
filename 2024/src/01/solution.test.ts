import { firstSolution, secondSolution } from './solution'

describe("Day 1", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/01/test-input.txt')
    
            expect(solution).toBe(11)
        })
    })
    
    describe("Second part", () => {
        it('Should give the similarity score sum', async () => {
            var solution = await secondSolution('src/01/test-input.txt')
    
            expect(solution).toBe(31)
        })
    })
})