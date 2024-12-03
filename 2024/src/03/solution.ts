import fs from 'node:fs/promises'
import { clean, parse } from './util'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)
    const terms = parse(input.toString())
    
    const output = terms.map(t => t[0] * t[1]).reduce((acc, mul) => acc += mul, 0)
    
    return output
}

export async function secondSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)
    const cleanInput = clean(input.toString())
    const terms = parse(cleanInput)
    
    const output = terms.map(t => t[0] * t[1]).reduce((acc, mul) => acc += mul, 0)
    
    return output
}