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