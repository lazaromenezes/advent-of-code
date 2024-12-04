import { findXmas } from "./util"

test('Can find XMAS in rows', () => {
    const input = '....XMAS\nXMASXMAS'

    const xmasCount = findXmas(input)

    expect(xmasCount).toBe(3)
})

test('Can find XMAS in rows reversed', () => {
    const input = '....SAMX\nSAMXSAMX'

    const xmasCount = findXmas(input)

    expect(xmasCount).toBe(3)
})

test('Can find XMAS in columns', () => {
    const input = 'X.X.X\nM.M.M\nA.A.A\nS.S.S'

    const xmasCount = findXmas(input)

    expect(xmasCount).toBe(3)
})

test('Can find XMAS in columns reversed', () => {
    const input = 'S.S.S\nA.A.A\nM.M.M\nX.X.X'

    const xmasCount = findXmas(input)

    expect(xmasCount).toBe(3)
})

test('Can find all variations of XMAS', () => {
    const input = 'S..S..S\n.A.A.A.\n..MMM..\nSAMXMAS\n..MMM..\n.A.A.A.\nS..S..S'

    const xmasCount = findXmas(input)

    expect(xmasCount).toBe(8)
})

test('Can handle false positives', () => {
    const input = 'XAMS..'

    const xmasCount = findXmas(input)

    expect(xmasCount).toBe(0)
})