import { calculateChecksum, defragment, defragmentV2, expandDisk, scanDisk } from "./lib";
import fs from 'fs/promises'

export async function firstSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)
    
    const scan = scanDisk(input.toString())
    
    const expandedDisk = expandDisk(scan)

    const defragmented = defragment(expandedDisk)
    
    return calculateChecksum(defragmented.filter(b => b !== null))
}

export async function secondSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)
    
    const scan = scanDisk(input.toString())
    
    const expandedDisk = expandDisk(scan)

    const defragmented = defragmentV2(expandedDisk, scan)
    
    return calculateChecksum(defragmented)
}