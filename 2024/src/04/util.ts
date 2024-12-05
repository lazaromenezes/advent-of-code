import { NEW_LINE } from "../core";

type CounterFn = (a: Array<string>, x: number, y: number) => number

export function findXmas(input: string): number {
    return count(input, 'X', countXmas)
}

export function findCrossMas(input: string): number {
    return count(input, 'A', countCrossMas)
}

function count(input: string, pivot: string, predicate: CounterFn): number{
    const rows = input.split(NEW_LINE)

    let count = 0

    rows.forEach((row, x, arr) => {
        for (let y = 0; y < row.length; y++) {
            if (row[y] === pivot)
                count += predicate(arr, x, y)
        }
    })

    return count
}

function countXmas(rows: string[], row: number, col: number): number {
    const XMAS = 'XMAS'
    let candidates: boolean[] = Array(8).fill(true)

    const exists = (px: number, py: number) => px >= 0 && px < rows.length && py >= 0 && py < rows[row].length

    for (let place = 1; place <= 3; place++) {
        const points = [
            [row, col + place],
            [row, col - place],
            [row - place, col],
            [row + place, col],
            [row + place, col + place],
            [row - place, col - place],
            [row - place, col + place],
            [row + place, col - place]
        ]

        candidates = points.map(([px, py], i) => candidates[i] && exists(px, py) && rows[px][py] === XMAS[place])
    }

    return candidates.filter(m => m === true).length
}

function countCrossMas(rows: string[], row: number, col: number): number {
    const prevRow = row - 1
    const prevCol = col - 1
    const nextRow = row + 1
    const nextCol = col + 1

    if(prevRow < 0 || nextRow >= rows.length)
        return 0

    if(prevCol < 0 || nextCol >= rows[row].length)
        return 0

    const topLeft = rows[prevRow][prevCol], 
    const topRight = rows[prevRow][nextCol],
    const bottomLeft = rows[nextRow][prevCol],
    const bottomRight = rows[nextRow][nextCol]

    if([topLeft, topRight, bottomLeft, bottomRight].every(v => v === 'M' || v === 'S'))
        return 0

    if(topLeft === bottomRight || topRight === bottomLeft)
        return 0

    return 1
}