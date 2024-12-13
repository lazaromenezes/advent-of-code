import { firstSolution } from "./solution"

describe("Day 7", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/07/test-input.txt')
    
            expect(solution).toBe(3749)
        })
    })
})