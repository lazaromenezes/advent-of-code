import { PERIOD } from "../core"
import { buildMap, findAntinodes, mapAntennas, Point } from "./lib"

describe("Map antennas", () => {
    test("Can map antennas", () => {
        const map = [['.', '.', '0', '.', 'a'], ['.', 'a', '0', '.', 'a']]

        const antennas = mapAntennas(map)

        expect(antennas).toEqual({
            "a": [[ 0,  4], [ 1,  1], [1,  4]],
            "0": [[ 0,  2], [ 1,  2]]
        })
    })
})

describe("Build map", () => {
    test("Builds a map out of strings", () => {
        const input = `..0..\n..0..`

        const map = buildMap(input)

        expect(map).toEqual([['.', '.', '0', '.', '.'], ['.', '.', '0', '.', '.']])
    })
})

describe("Find antinodes", () => {
    test("Can find antinodes given a map", () => {
        const map = new Array(10).fill(new Array(10).fill(PERIOD))
        const antennaMap = {
            "a": ([[3, 4], [5, 5]]) as Point[]
        }

        const antinodes = findAntinodes(antennaMap, map)

        expect(antinodes).toEqual([[ 1, 3], [ 7, 6]])
    })

    test("Can find antinodes with three antennas, excluding the ones out of the map", () => {
        const map = new Array(10).fill(new Array(10).fill(PERIOD))
        const antennaMap = {
            "a": ([[3, 4], [4, 8], [5, 5]]) as Point[]
        }

        const antinodes = findAntinodes(antennaMap, map)

        const expected = [[1, 3], [2, 0], [6, 2], [7, 6]]

        expect(new Set(antinodes)).toEqual(new Set(expected))
    })

    test("Don't create antinodes for single antenna", () => {
        const map = new Array(10).fill(new Array(10).fill(PERIOD))
        const antennaMap = {
            "a": ([[3, 4]]) as Point[]
        }

        const antinodes = findAntinodes(antennaMap, map)

        expect(antinodes).toEqual([])
    })

    test("Don't create antinodes for different antennas", () => {
        const map = new Array(10).fill(new Array(10).fill(PERIOD))
        
        const antennaMap = {
            "a": ([[3, 4], [4, 8], [5, 5]]) as Point[],
            "A": []
        }

        const antinodes = findAntinodes(antennaMap, map)

        const expected = [[1, 3], [2, 0], [6, 2], [7, 6]]

        expect(new Set(antinodes)).toEqual(new Set(expected))
    })

    test("Don't create repeated antinodes", () => {
        const map = new Array(10).fill(new Array(10).fill(PERIOD))
        
        const antennaMap = {
            "a": ([[3, 4], [4, 8], [5, 5]]) as Point[],
            "b": ([[3, 4], [4, 8], [5, 5]]) as Point[],
        }

        const antinodes = findAntinodes(antennaMap, map)

        const expected = [[1, 3], [2, 0], [6, 2], [7, 6]]

        expect(new Set(antinodes)).toEqual(new Set(expected))
    })
})