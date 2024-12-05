import { firstSolution } from './solution'

describe("Day 5", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/05/test-input.txt')
    
            expect(solution).toBe(143)
        })
    })
})