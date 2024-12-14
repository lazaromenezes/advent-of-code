import { EMPTY, NEW_LINE } from "../core";

type Point = [number, number]
const SEEK_PATTERN = [[-1, 0], [0, 1], [1, 0], [0, -1]]

export function buildMap(input: string): number[][]{
    return input.split(NEW_LINE).map(r => r.split(EMPTY).map(v => parseInt(v)))
}

export function mapTrailheads(map: number[][]) : Array<Point> {
    const indexes = new Array<Point>()

    map.forEach((r, row) => {
        r.forEach((c, col) => {
            if(c === 0)
                indexes.push([row, col])
        })
    })

    return indexes
}

export function mapReachable(position: Point, map: number[][], lastLevel: number = 9): Array<Point>{
    const next = new Array<Point>()
    
    const [px, py] = position
    const target = map[px][py] + 1
    const height = map.length
    const width = map[0].length

    SEEK_PATTERN.forEach(([row, col]) => {
        const nRow = px + row
        const nCol = py + col

        if(inMap(nRow, nCol, width, height) && map[nRow][nCol] === target){
            if(target === lastLevel)
                next.push([nRow, nCol])
            else
                next.push(...mapReachable([nRow, nCol], map, lastLevel))
        }
    })

    return next
}

function inMap(row: number, col: number, width: number, height: number){
    return row >= 0 && row < height && col >= 0 && col < width
}

export function score(alternatives: Array<Point>): number {
    return alternatives.reduce((res, point) => {
        if(res.findIndex((p) => p[0] === point[0] && p[1] === point[1]) < 0)
            res.push(point)

        return res
    }, new Array<Point>()).length
}

export function rating(alternatives: Array<Point>){
    return alternatives.length
}