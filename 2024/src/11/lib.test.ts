import { applyRules, blink } from "./lib"

describe("Rules", () => {
    test("Zero rule returns an element with value 1", () => {
        const result = applyRules(0)

        expect(result).toEqual([1])
    })

    test("Catch all rule returns element times 2024", () => {
        const result = applyRules(1)

        expect(result).toEqual([2024])
    })

    test("Even digits rule splits result in half", () => {
        const result = applyRules(1234)

        expect(result).toEqual([12, 34])
    })

    test("Even digits rule remove leading zeroes", () => {
        const result = applyRules(1204)

        expect(result).toEqual([12, 4])
    })
})

describe("Blink", () => {
    test("Blink makes stones rearrange", () => {
        const stones = [0, 1, 10, 99, 999]

        const rearranged = blink(stones)

        expect(rearranged).toEqual([1, 2024, 1, 0, 9, 9, 2021976])
    })
})