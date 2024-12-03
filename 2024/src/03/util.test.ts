import { clean, parse } from './util'

test('parse returns a collection of pairs', () => {
    const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`

    const data = parse(input)

    expect(data).toEqual([[2, 4], [5, 5], [11, 8], [8, 5]])
})

test("clean removes all instructions between don't() and do()", () => {
    const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

    const expected = `xmul(2,4)&mul[3,7]!^?mul(8,5))`

    const cleaned = clean(input)

    expect(cleaned).toEqual(expected)
})

test("clean removes don't instructions at the end", () => {
    const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))don't()blablabla"

    const expected = `xmul(2,4)&mul[3,7]!^?mul(8,5))`

    const cleaned = clean(input)

    expect(cleaned).toEqual(expected)
})

test("clean removes all instructions between don't() and do() even with line breaks", () => {
    const input = `mul(1,2)don't()mul(1,2)do()mul(3,4)don't()\nmul(5,6)do()mul(7,8)don't()mul(9,10)`

    const expected = `mul(1,2)mul(3,4)mul(7,8)`

    const cleaned = clean(input)

    expect(cleaned).toEqual(expected)
})