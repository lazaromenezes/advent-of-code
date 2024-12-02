import fs from 'node:fs/promises'
import { calculateReport, isSafe, isSafeWithDampper, parse } from './util'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)
    const reports = parse(input.toString())
    
    const differences = reports.map(calculateReport)

    const output = differences.filter(isSafe).length
    
    return output
}

export async function secondSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)
    const reports = parse(input.toString())
    
    const output = reports.filter(isSafeWithDampper).length

    return output
}