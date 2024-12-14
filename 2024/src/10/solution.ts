import fs from 'fs/promises'
import { buildMap, mapReachable, mapTrailheads, rating, score } from './lib'

export async function firstSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)

    const map = buildMap(input.toString())
    const heads = mapTrailheads(map)

    const reachable = heads.map(h => mapReachable(h, map)).map(score)

    return reachable.reduce((acc, val) => acc += val, 0)
}

export async function secondSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)

    const map = buildMap(input.toString())
    const heads = mapTrailheads(map)

    const reachable = heads.map(h => mapReachable(h, map)).map(rating)

    return reachable.reduce((acc, val) => acc += val, 0)
}