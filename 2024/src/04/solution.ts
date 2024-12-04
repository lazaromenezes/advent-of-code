import fs from 'node:fs/promises'
import { findXmas } from './util'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    return findXmas(input.toString())
}