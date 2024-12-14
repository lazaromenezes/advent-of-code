import { firstSolution, secondSolution} from "./solution"

describe("Day 8", () => {
    describe("First part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await firstSolution('src/08/test-input.txt')
    
            expect(solution).toBe(14)
        })
    })

    describe("Second part", () => {
        it('Should give sample output with test-input', async () => {
            var solution = await secondSolution('src/08/test-input.txt')
    
            expect(solution).toBe(34)
        })

        it('Should give sample output with test-input2', async () => {
            var solution = await secondSolution('src/08/test-input2.txt')
    
            expect(solution).toBe(9)
        })
    })
})