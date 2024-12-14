import fs from 'node:fs/promises'
import { buildMap, findAntinodes, mapAntennas } from './lib'

export async function firstSolution(path: string): Promise<number> {
    const input = (await fs.readFile(path))
    
    const map = buildMap(input.toString())
    const antennas = mapAntennas(map)
    const antinodes = findAntinodes(antennas, map)
    
    return antinodes.length
}