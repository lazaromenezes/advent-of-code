import { applyRules, blink, applyRulesV2, blinkV2, count } from "./lib"

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

describe("Rules V2", () => {
    test("Zero rule returns an element with value 1", () => {
        const result = applyRulesV2(0)

        expect(result).toEqual(1)
    })

    test("Catch all rule returns element times 2024", () => {
        const result = applyRulesV2(1)

        expect(result).toEqual(2024)
    })

    test("Even digits rule splits result in half", () => {
        const result = applyRulesV2(1234)

        expect(result).toEqual([12, 34])
    })

    test("Even digits rule remove leading zeroes", () => {
        const result = applyRulesV2(1204)

        expect(result).toEqual([12, 4])
    })

    test("Applied to array, traverse it all", () => {
        const result = applyRulesV2([12, 34])

        expect(result).toEqual([[1, 2], [3, 4]])
    })
})

describe("Blink V2", () => {
    test("Blink makes stones rearrange", () => {
        const stones = [0, 1, 10, 99, 999]

        const rearranged = blinkV2(stones)

        expect(rearranged).toEqual([1, 2024, [1, 0], [9, 9], 2021976])
    })

    test("Blink makes stones rearrange recurse", () => {
        const stones = [[12, 34], 0, [1234, 1020]]

        const rearranged = blinkV2(stones)

        expect(rearranged).toEqual([[[1, 2], [3, 4]], 1, [[12, 34], [10, 20]]])
    })
})

describe("Count", () => {
    test("Count returns straight value", () => {
        const stones = [0, 1, 10, 99, 999]

        expect(count(stones)).toEqual(5)
    })

    test("Count counts recursivelly", () => {
        const stones = [[[1, 2], [3, 4]], 1, [[12, 34], [10, 20]]]

        expect(count(stones)).toEqual(9)
    })
})