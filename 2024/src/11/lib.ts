import internal from "node:stream"

const MULTIPLIER = 2024

// V1
export function blink(stones: number[]): number[] {
    return stones.flatMap(value => applyRules(value))
}

export function applyRules(value: number): number[] {
    if (value == 0)
        return [1]

    const stringValue = value.toString()

    if (stringValue.length % 2 == 0) {
        const halfLength = stringValue.length / 2

        const left = stringValue.slice(0, halfLength)
        const right = stringValue.slice(halfLength)

        return [parseInt(left), parseInt(right)]
    }

    return [value * MULTIPLIER]
}

// V2 

export function blinkV2(stones: any): any {
    return stones.map((value: any) => applyRulesV2(value))
}

export function applyRulesV2(value: any): number | number[] {
    if(typeof value !== "number"){
        value[0] = applyRulesV2(value[0])
        value[1] = applyRulesV2(value[1])

        return value
    }else{
        if (value == 0){
            return 1
        }

        const stringValue = value.toString()

        if (stringValue.length % 2 == 0) {
            const halfLength = stringValue.length / 2

            const left = stringValue.slice(0, halfLength)
            const right = stringValue.slice(halfLength)

            return [parseInt(left), parseInt(right)]
        }
        return value * MULTIPLIER
    }
}

export function count(stones: any) {
    return stones.reduce((total: any, value: any) => {
        if(typeof value === "number")
            total += 1
        else
            total += count(value)

        return total
    }, 0)
}

// V3

export function run(input: number[], times: number) : Record<number, number>{
    const state : Record<number, number> = {}

    input.forEach(v => state[v] = 1)

    for(let i = 0; i < times; i++){
        const initialState = {...state}
        const values = []
        
        for(let v in state){
            if(state[v] > 0){
                values.push(parseInt(v))
                state[v] = 0
            }
        }

        values.forEach(v => {
            let mapped = applyRules(v)

            mapped.forEach(m => {
                if(m in state)
                    state[m] += initialState[v]
                else
                    state[m] = initialState[v]
            })
        })

        
    }

    return state
}