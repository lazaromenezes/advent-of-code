import fs from 'node:fs/promises'
import { findMiddlePage, isValid, parseRules, parseUpdates, sort, split } from './util'

export async function firstSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    const {rules, updates} = split(input.toString())

    const parsedRules = parseRules(rules)
    const parsedUpdates = parseUpdates(updates)

    const validUpdates = parsedUpdates.filter(u => isValid(u, parsedRules))

    return validUpdates.reduce((total, update) => total += findMiddlePage(update), 0)
}

export async function secondSolution(path: string): Promise<number> {
    const input = await fs.readFile(path)

    const {rules, updates} = split(input.toString())

    const parsedRules = parseRules(rules)
    const parsedUpdates = parseUpdates(updates)

    const invalidUpdates = parsedUpdates.filter(u => !isValid(u, parsedRules))
    const sortedUpdates = invalidUpdates.map(u => sort(u, parsedRules))

    return sortedUpdates.reduce((total, update) => total += findMiddlePage(update), 0)
}
