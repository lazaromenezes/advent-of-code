import { BLANK_LINE, COMMA, NEW_LINE, PIPE } from "../core"

type Rules = Record<number, number[]>
type Manual = {rules: string, updates: string}
type Update = number[]

export function split(input: string):  Manual{
    const [rules, updates] = input.split(BLANK_LINE)

    return {rules, updates}
}

export function parseRules(input: string): Rules{
    const lines = input.split(NEW_LINE)

    const rulebook = lines.reduce((book, line) => {
        const [idx, page] = line.split(PIPE).map(v => parseInt(v))

        if(idx in book)
            book[idx].push(page)
        else
            book[idx] = [page]

        return book
    }, {} as Rules)

    return rulebook
}

export function parseUpdates(input: string): Update[] {
    return input.split(NEW_LINE).map(u => u.trim().split(COMMA).map(p => parseInt(p)))
}

export function isValid(input: Update, rules: Rules) {
    let pos = input.length
    
    do{
        const page = input[--pos]
        
        if(page in rules){
            const invalid = input.slice(0, pos).some(p => rules[page].includes(p))

            if(invalid)
                return false
        }

    }while(pos > 0)

    return true
}

export function findMiddlePage(input: Update) : number {
    return input[Math.floor(input.length / 2)]
}

export function sort(input: Update, rules: Rules) : Update {
    const sorted = input.sort((current, other) => {
        if(!(current in rules))
            return 0
        
        return rules[current].includes(other) ? -1 : 1
    })

    return sorted
}