import { EMPTY, NEW_LINE, PERIOD } from "../core"

export type Point = [number, number]
type AntennaMap = Record<string, Point[]>
type Map = string[][]

export function findAntinodes(antennaMap: AntennaMap, map: Map) : Array<Point>{
    const antinodes = new Array<Point>()
    const height = map.length
    const width = map[0].length

    const inBoundary = (x: number, y: number) => x >= 0 && x < height && y >= 0 && y < width
    const isAdded = (p: Point) => antinodes.findIndex(a => a[0] == p[0] && a[1] == p[1]) >= 0 

    for(let kind in antennaMap){
        const antennas = antennaMap[kind]

        for(let i = 0; i < antennas.length; i++){
            for(let j = i + 1; j < antennas.length; j++){
                const antinodePair = calculateAntinodes(antennas[i], antennas[j])
                const [a, b] = antinodePair

                if(inBoundary(...a) && !isAdded(a))
                    antinodes.push(a)

                if(inBoundary(...b) && !isAdded(b))
                    antinodes.push(b)
            }
        }
    }

    return antinodes
}

export function mapAntennas(map: Map): AntennaMap{
    const antennaMap = {} as AntennaMap

    map.forEach((value, row) => {
        value.forEach((spot: string, col) => {
            if(spot !== PERIOD){
                antennaMap[spot] = [...(antennaMap[spot] || []), [row, col]]
            }
        })
    })

    return antennaMap
}

export function buildMap(input: string): string[][]{
    return input.split(NEW_LINE).map(r => r.split(EMPTY))
}

function calculateAntinodes(a: Point, b: Point): [Point, Point] {
    const [xa, ya] = a
    const [xb, yb] = b

    const dx = xb - xa
    const dy = yb - ya

    const antiA = [xa - dx, ya - dy] as Point
    const antiB = [xb + dx, yb + dy] as Point

    return [antiA, antiB]
}