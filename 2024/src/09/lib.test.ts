import { EMPTY, PERIOD } from "../core"
import { calculateChecksum, defragment, expandDisk } from "./lib"

describe("Checksum", () => {
    test("Calculate checksum returns the correct result", () => {
        const fileBlocks = [0, 0, 9, 9, 8]
    
        const checksum = calculateChecksum(fileBlocks)
    
        expect(checksum).toEqual(77)
    })

    test("Calculate checksum returns the correct full example", () => {
        const fileBlocks = '0099811188827773336446555566'.split('').map(i => parseInt(i))
    
        const checksum = calculateChecksum(fileBlocks)
    
        expect(checksum).toEqual(1928)
    })
})

describe("Expand disk", () => {
    test("Expand disk finishing on file", () => {
        const input = "12345"
    
        const expandedDisk = expandDisk(input)
    
        expect(expandedDisk).toEqual([0, null, null, 1, 1, 1, null, null, null, null, 2, 2, 2, 2, 2])
    })

    test("Expand disk finishing with empty spaces", () => {
        const input = "123452"
    
        const expandedDisk = expandDisk(input)
    
        expect(expandedDisk).toEqual([0, null, null, 1, 1, 1, null, null, null, null, 2, 2, 2, 2, 2, null, null])
    })

    test("Expand disk with no empty spaces", () => {
        const input = "10305"
    
        const expandedDisk = expandDisk(input)
    
        expect(expandedDisk).toEqual([0, 1, 1, 1, 2, 2, 2, 2, 2])
    })
})

describe("Defragment disk", () => {
    test("Defragment process organize data properly", () => {
        const expandedDisk = [0, null, null, 1, 1, 1, null, null, null, null, 2, 2, 2, 2, 2]

        const expected = [0, 2, 2, 1, 1, 1, 2, 2, 2, null, null, null, null, null, null]

        const defragmented = defragment(expandedDisk)

        expect(defragmented).toEqual(expected)
    })

    test("Defragment sample input and organize data properly", () => {
        const mapInputString = ((str: string) => {
            return str.split(EMPTY).map(i => i === PERIOD ? null : parseInt(i))
        })
        
        const input = "00...111...2...333.44.5555.6666.777.888899"
        
        const expandedDisk = mapInputString(input)

        const expectedString = '0099811188827773336446555566..............'
        const expected = mapInputString(expectedString)

        const defragmented = defragment(expandedDisk)

        expect(defragmented).toEqual(expected)
    })

})