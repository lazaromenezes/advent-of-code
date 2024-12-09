import { calculateChecksum, defragment, expandDisk } from "./lib";
import fs from 'fs/promises'

export async function firstSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)
    
    const expandedDisk = expandDisk(input.toString())

    const defragmented = defragment(expandedDisk)
    
    return calculateChecksum(defragmented.filter(b => b !== null))
}