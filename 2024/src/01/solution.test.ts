import { firstSolution } from './solution'

describe("First part", () => {
    it('Should give sample output with test-input', async () => {
        var solution = await firstSolution('01/test-input')

        expect(solution).toBe(11)
    })
})