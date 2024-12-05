import { findMiddlePage, isValid as isValidUpdate, parseRules, parseUpdates, split } from "./util"

describe("Parsing", () => {
    test("Split input in rules and pages", () => {
        const rules = "10|20\n30|40"
        const updates = "10,20,30\n90,80,70"

        const input = `${rules}\n\n${updates}`

        const parsed = split(input)

        expect(parsed.rules).toEqual(rules)
        expect(parsed.updates).toEqual(updates)
    })

    test("Rules are parsed to Rule collection", () => {
        const input = "10|20\n30|40\n10|25\n10|15\n30|99"

        const rules = parseRules(input)

        expect(rules).toEqual({10: [20, 25, 15], 30: [40, 99]})
    })

    test("Updates are parsed to lists", () => {
        const input = "10,20,30\n90,80,70"

        const rules = parseUpdates(input)

        expect(rules).toEqual([[10, 20, 30], [90, 80, 70]])
    })
})

describe("Validating", () => {
    test("Update is valid if all pages are sorted properly", () => {
        const update = [75,47,61,53,29]
        const rules = {
            75: [47, 61, 53, 29], 
            47: [61, 53, 29],
            61: [53, 29],
            53: [29]
        }

        expect(isValidUpdate(update, rules)).toBeTruthy()
    })

    test("Update is inalid for wrong rule", () => {
        const update = [75,47,61,53,29]
        const rules = {
            75: [47, 61, 53, 29], 
            47: [61, 53, 29],
            61: [53, 29, 47],
            53: [29]
        }

        expect(isValidUpdate(update, rules)).toBeFalsy()
    })
})

describe("Find Middle Page", () => {
    test("Update is valid if all pages are sorted properly", () => {
        const update = [75,47,61,53,29]

        expect(findMiddlePage(update)).toBe(61)
    })
})