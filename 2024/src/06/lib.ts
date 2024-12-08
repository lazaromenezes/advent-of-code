import { CARET, NEW_LINE, POUND} from "../core"

type Point = {x: number, y: number}
type AreaSize = {w: number, h: number}
type Map = string[]

export enum Outcome{
    EXITED,
    LOOP
}

type Hit = {direction: Point, position: Point}

type SimulationResult = {uniquePositions: Point[], hits: Hit[], outcome: Outcome}

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

export function simulate(input: string) : SimulationResult {
    const map = input.split(NEW_LINE)
    const area = {h: map.length, w: map[0].length}

    let position = findInitialPosition(input, area.h, area.w)

    return runSimulation(map, area, position)
}

export function simlateBlocks(input: string) : Point[] {
    const map = input.split(NEW_LINE)
    const area = {h: map.length, w: map[0].length}

    const initialPosition = findInitialPosition(input, area.h, area.w)
    const {uniquePositions} = runSimulation(map, area, initialPosition)
    
    const candidatePositions = uniquePositions.filter(p => !isSamePoint(p, initialPosition))

    let blockPositions: Point[] = []

    candidatePositions.forEach(p => {
        const changedMap = [...map]
        const row = changedMap[p.x]
        const replaced = `${row.slice(0, p.y)}${POUND}${row.slice(p.y+1)}`
        changedMap[p.x] = replaced

        const newSimulation = runSimulation(changedMap, area, initialPosition)

        if(newSimulation.outcome === Outcome.LOOP)
            blockPositions.push(p)
    })

    return blockPositions
}

function runSimulation(map: Map, area: AreaSize, initialPosition: Point){
    let position = initialPosition
    let direction = UP
    let uniquePositions: Point[] = []
    let hits: Hit[] = []

    while(true){
        if(!uniquePositions.some(p => isSamePoint(p, position)))
            uniquePositions.push(position)

        let targetPosition = planMove(position, direction)

        if(!isInArea(targetPosition, area))
            break

        while(isBlocked(targetPosition, map)){
            if(hits.some(hit => isSameHit(hit, direction, targetPosition)))
                return {uniquePositions, hits, outcome: Outcome.LOOP}

            hits.push({position: targetPosition, direction})
            direction = turnRight(direction)
            targetPosition = planMove(position, direction)

            if(!isInArea(targetPosition, area))
                break
        }

        if(!isInArea(targetPosition, area))
            break

        position = targetPosition
    }
    
    return {uniquePositions, hits, outcome: Outcome.EXITED}
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

function isSamePoint(a: Point, b: Point) : boolean{
    return a.x == b.x && b.y == a.y
}

function isSameHit(hit: Hit, direction: Point, position: Point): boolean{
    return isSamePoint(hit.direction, direction) && isSamePoint(hit.position, position)
}