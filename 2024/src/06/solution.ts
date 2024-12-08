import fs from 'node:fs/promises'
import { simulate } from './lib'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    const result = simulate(input.toString())

    return result.uniquePositions.length
}
