import { findMiddlePage, isValid as isValidUpdate, parseRules, parseUpdates, sort, split } from "./util"

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

describe("Sorting", () => {
    test("Can sort a invalid update breaking single rule", () => {
        const update = [75,97,47,61,53]

        const rules = {
            75: [47, 61, 53, 29], 
            47: [61, 53, 29],
            61: [53, 29],
            53: [29],
            97: [75]
        }

        expect(isValidUpdate(update, rules)).toBeFalsy()

        const sorted = sort(update, rules)

        expect(sorted).toEqual([97, 75, 47, 61, 53])
        expect(isValidUpdate(sorted, rules)).toBeTruthy()
    })

    test("Can sort a invalid update breaking several rules", () => {
        const update = [97,13,75,29,47]

        const rules = {
            75: [47, 61, 53, 29, 13], 
            47: [61, 53, 29, 13],
            97: [13, 61, 47, 53, 29, 75],
            29: [13]
        }

        expect(isValidUpdate(update, rules)).toBeFalsy()

        const sorted = sort(update, rules)

        expect(sorted).toEqual([97, 75, 47, 29, 13])
        expect(isValidUpdate(sorted, rules)).toBeTruthy()
    })
})

//