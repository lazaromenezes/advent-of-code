const MULTIPLIER = 2024

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