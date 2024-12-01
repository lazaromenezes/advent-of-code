import fs from 'node:fs/promises'
import { calculateDifference, calculateScores, parse } from './util'

export async function firstSolution(inputPath: string){
  const input = await fs.readFile(inputPath)
  const lists = parse(input.toString())
  
  const differences = calculateDifference(lists[0], lists[1])

  const output = differences.reduce((acc, val) => acc + val)
  
  return output
}

export async function secondSolution(inputPath: string){
  const input = await fs.readFile(inputPath)
  const lists = parse(input.toString())
  
  const differences = calculateScores(lists[0], lists[1])

  const output = differences.reduce((acc, val) => acc + val)
  
  return output 
}