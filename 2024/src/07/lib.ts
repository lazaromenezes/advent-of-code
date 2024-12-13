import { COLON, SPACE } from "../core"

type Expression = {result: number, terms: number[]}

export function parse(input: string): Expression {
    const [result, termInput] = input.split(COLON)
    const terms = termInput.trim().split(SPACE).map(t => parseInt(t))

    return {result: parseInt(result), terms}
}

export function validate(expression: Expression): boolean {
    const {result, terms} = expression

    let paths = [terms[0]]

    const ops = [add, mul]

    for(let t = 1; t < terms.length; t++){
        let reevaluated = []
        
        const term = terms[t]
        
        for(let path of paths){
            for(let op of ops){
                const value = op(path, term)
                if(value <= result)
                    reevaluated.push(value)
            }
        }

        paths = reevaluated
    }

    return paths.some(p => p === result)
}

function add(a: number, b: number){
    return a + b
}

function mul(a: number, b: number){
    return a * b
}

