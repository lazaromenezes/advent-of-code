import fs from 'node:fs/promises'
import { simlateBlocks, simulate } from './lib'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    const result = simulate(input.toString())

    return result.uniquePositions.length
}

export async function secondSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    const result = simlateBlocks(input.toString())

    return result.length
}