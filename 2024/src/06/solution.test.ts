import { firstSolution } from './solution'

describe("Day 5", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/06/test-input.txt')
    
            expect(solution).toBe(41)
        })
    })
})