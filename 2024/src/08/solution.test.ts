import { firstSolution} from "./solution"

describe("Day 8", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/08/test-input.txt')
    
            expect(solution).toBe(14)
        })
    })

    
})