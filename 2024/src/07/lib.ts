import { COLON, SPACE } from "../core"

type Expression = {result: number, terms: number[]}

export function parse(input: string): Expression {
    const [result, termInput] = input.split(COLON)
    const terms = termInput.trim().split(SPACE).map(t => parseInt(t))

    return {result: parseInt(result), terms}
}

export function validate(expression: Expression): boolean {
    const {result, terms} = expression

    const ops = [add, mul]

    for(let t = 1; t < terms.length; t++){
        const left = terms.slice(0, t)
        const curr = terms[t]
        const right = terms.slice(t + 1)

        for(let op1 of ops){
            for(let op2 of ops){
                let partial = left.reduce((acc, v, i) => acc = i === 0 ? v : op1(acc, v))
                partial = op2(partial, curr)
                let final = right.reduce((acc, v) => acc = op1(acc, v), partial)

                if(final === result)
                    return true
            }
        }
    }
    return false
}

function add(a: number, b: number){
    return a + b
}

function mul(a: number, b: number){
    return a * b
}