import fs from 'node:fs/promises'
import { simulate } from './lib'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    return simulate(input.toString())
}
