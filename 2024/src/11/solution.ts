import fs from 'node:fs/promises'
import { SPACE } from '../core'
import { blink } from './lib'

export async function firstSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)
    
    let stones = input.toString().split(SPACE).map(s => parseInt(s))

    for(let i = 0; i < 25; i++)
        stones = blink(stones)

    return stones.length
}

