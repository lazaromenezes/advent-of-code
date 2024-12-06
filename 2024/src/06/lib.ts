import { CARET, NEW_LINE, POUND} from "../core"

type Point = {x: number, y: number}
type AreaSize = {w: number, h: number}
type Map = string[]

const NEW_LINE_RE = /\n/g

const UP = {x: -1, y: 0}
const RIGHT = {x: 0, y: 1}
const DOWN = {x: 1, y: 0}
const LEFT = {x: 0, y: -1}

const directions = [UP, RIGHT, DOWN, LEFT]

export function isInArea(targetPosition: Point, areaSize: AreaSize) : boolean {
    const {x, y} = targetPosition
    const {w, h} = areaSize

    return x >= 0 && x < w && y >= 0 && y < h
}

export function findInitialPosition(input: string, rows: number, cols: number) : Point {
    const index = input.replace(NEW_LINE_RE, '').indexOf(CARET)

    const x = Math.floor(index / rows)
    const y = index % cols

    return {x, y}
}

export function simulate(input: string) : number {
    const map = input.split(NEW_LINE)
    const area = {h: map.length, w: map[0].length}

    let position = findInitialPosition(input, area.h, area.w)
    let direction = UP
    let visitedPositions: Point[] = []

    while(true){
        if(!visitedPositions.some(p => p.x === position.x && p.y === position.y))
            visitedPositions.push(position)

        let targetPosition = planMove(position, direction)

        if(!isInArea(targetPosition, area))
            break

        while(isBlocked(targetPosition, map)){
            direction = turnRight(direction)
            targetPosition = planMove(position, direction)

            if(!isInArea(targetPosition, area))
                break
        }

        if(!isInArea(targetPosition, area))
            break

        position = targetPosition
    }
    
    return visitedPositions.length
}

function planMove(currentPosition: Point, direction: Point) : Point{
    const x = currentPosition.x + direction.x
    const y = currentPosition.y + direction.y
    
    return {x, y}
}

function isBlocked(targetPosition: Point, map: Map) : boolean{
    const {x, y} = targetPosition
    
    return map[x][y] === POUND
}

function turnRight(direction: Point) : Point{
    const index = directions.indexOf(direction) + 1

    return directions[index % directions.length]
}
