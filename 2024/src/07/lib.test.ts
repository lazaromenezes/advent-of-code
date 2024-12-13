import { parse, validate } from "./lib"

describe("Parsing", () => {
    test("Can parse properly", () => {
        const input = "3267: 81 40 27"

        const expression = parse(input)

        expect(expression).toEqual({result: 3267, terms: [81, 40, 27]})
    })
})

describe("Validating", () => {
    test("Is valid if can be solved with multiplication", () => {
        const expression = {result: 190, terms: [10, 19]}

        expect(validate(expression)).toBeTruthy()
    })

    test("Is valid if can be solved with addition", () => {
        const expression = {result: 29, terms: [10, 19]}

        expect(validate(expression)).toBeTruthy()
    })

    test("Is valid if can be solved with mixed multiplication and addition", () => {
        const expression = {result: 3267, terms: [81, 40, 27]}

        expect(validate(expression)).toBeTruthy()
    })

    test("Is valid if can be solved with mixed multiplication and addition with 4 terms", () => {
        const expression = {result: 292, terms: [11, 6, 16, 20]}

        expect(validate(expression)).toBeTruthy()
    })

    test("Is not valid without concatenation", () => {
        const expression = {result: 156, terms: [15, 6]}

        expect(validate(expression)).toBeFalsy()
    })

    test("Is valid with concatenation", () => {
        const expression = {result: 156, terms: [15, 6]}

        expect(validate(expression, true)).toBeTruthy()
    })
})