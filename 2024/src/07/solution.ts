import fs from 'node:fs/promises'
import { NEW_LINE } from '../core'
import { parse, validate } from './lib'

export async function firstSolution(path: string): Promise<number> {
    const input = (await fs.readFile(path)).toString().split(NEW_LINE)

    const expressions = input.map(parse)

    const validExpressions = expressions.filter(validate)

    return validExpressions.reduce((acc, val) => acc += val.result, 0)
}