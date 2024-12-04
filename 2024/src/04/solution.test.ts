import { firstSolution } from './solution'

describe("Day 3", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/04/test-input.txt')
    
            expect(solution).toBe(18)
        })
    })
})