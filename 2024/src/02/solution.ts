import fs from 'node:fs/promises'
import { calculateReport, isSafe, parse } from './util'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)
    const reports = parse(input.toString())
    
    const differences = reports.map(calculateReport)

    const output = differences.filter(isSafe).length
    
    return output
}