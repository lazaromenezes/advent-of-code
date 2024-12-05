import { findCrossMas, findXmas } from "./util"

describe("XMAS", () => {
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
})

describe("X-MAS", () => {
    test('Can find X-MAS in first position', () => {
        const input = 'M.S\n.A.\nM.S'
    
        const xmasCount = findCrossMas(input)
    
        expect(xmasCount).toBe(1)
    })
    
    test('Can find X-MAS in second position', () => {
        const input = 'M.M\n.A.\nS.S'
    
        const xmasCount = findCrossMas(input)
    
        expect(xmasCount).toBe(1)
    })
    
    test('Can find X-MAS in third position', () => {
        const input = 'S.M\n.A.\nS.M'
    
        const xmasCount = findCrossMas(input)
    
        expect(xmasCount).toBe(1)
    })
    
    test('Can find X-MAS in fourth position', () => {
        const input = 'S.S\n.A.\nM.M'
    
        const xmasCount = findCrossMas(input)
    
        expect(xmasCount).toBe(1)
    })

    test('Does not count non X-MAS', () => {
        const inputs = ['S.X\n.A.\nM.M', 'S.X\n.A.\nX.M', 'S.S\n.A.\nX.M', 'S.S\n.A.\nM.X']
    
        const xmasCount = inputs.map(findCrossMas)
    
        expect(xmasCount).toEqual([0, 0, 0, 0])
    })
})