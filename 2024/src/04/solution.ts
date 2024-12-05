import fs from 'node:fs/promises'
import { findCrossMas, findXmas } from './util'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    return findXmas(input.toString())
}

export async function secondSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    return findCrossMas(input.toString())
}