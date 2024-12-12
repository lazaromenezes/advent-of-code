import fs from 'node:fs/promises'
import { SPACE } from '../core'
import { blinkV2, count } from './lib'

/*
* BlinkV2 worked better for first solution, but still couldn't finish 2nd part
*/
export async function firstSolution(path: string): Promise<number>{
    const input = await fs.readFile(path)
    
    let stones = input.toString().split(SPACE).map(s => parseInt(s))

    for(let i = 0; i < 25; i++)
        stones = blinkV2(stones)

    return count(stones)
}

export async function secondSolution(path: string): Promise<number>{
    return 0    
}

