import { firstSolution, firstSolutionV3, secondSolution } from "./solution"

describe("Day 11", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/11/test-input.txt')
    
            expect(solution).toBe(55312)
        })

        it('Should give sample output with test-input using run', async () => {
            var solution = await firstSolutionV3('src/11/test-input.txt')
    
            expect(solution).toBe(55312)
        })
    })
})