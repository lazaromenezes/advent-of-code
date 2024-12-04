import { NEW_LINE } from "../core";

const X = 'X'
const XMAS = 'XMAS'

export function findXmas(input: string): number {
    const rows = input.split(NEW_LINE)

    let count = 0

    rows.forEach((row, x, arr) => {
        for (let y = 0; y < row.length; y++) {
            if (row[y] === X)
                count += countXmas(arr, x, y)
        }
    })

    return count
}

function countXmas(rows: string[], x: number, y: number): number {
    let candidates: boolean[] = Array(8).fill(true)

    const isValid = (px: number, py: number) => px >= 0 && px < rows.length && py >= 0 && py < rows[x].length

    for (let place = 1; place <= 3; place++) {

        const points = [
            [x, y + place],
            [x, y - place],
            [x - place, y],
            [x + place, y],
            [x + place, y + place],
            [x - place, y - place],
            [x - place, y + place],
            [x + place, y - place]
        ]

        candidates = points.map(([px, py], i) => candidates[i] && isValid(px, py) && rows[px][py] === XMAS[place])
    }

    return candidates.filter(m => m === true).length
}
