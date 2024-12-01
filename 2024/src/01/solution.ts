import fs from 'node:fs/promises'
import { calculateDifference, parse } from './util'

export async function firstSolution(inputPath: string){
  const input = await fs.readFile(inputPath)
  const lists = parse(input.toString())
  
  const differences = calculateDifference(lists[0], lists[1])

  const output = differences.reduce((acc, val) => acc + val)
  
  return output
}