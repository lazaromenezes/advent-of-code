import { firstSolution, secondSolution } from "./solution"

describe("Day 10", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/10/test-input.txt')
    
            expect(solution).toBe(36)
        })
    })


    describe("Second part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await secondSolution('src/10/test-input.txt')
    
            expect(solution).toBe(81)
        })
    })
})