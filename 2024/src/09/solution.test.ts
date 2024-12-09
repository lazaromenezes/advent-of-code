import { firstSolution } from "./solution"

describe("Day 9", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/09/test-input.txt')
    
            expect(solution).toBe(1928)
        })
    })
})