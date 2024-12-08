import exp from "node:constants"
import { findInitialPosition, isInArea, Outcome, simulate } from "./lib"

describe("Positioning", () => {
    test("isInArea if target position is within boundaries", () => {
        const area = {w: 5, h: 5}
        const targetPosition = {x: 3, y: 4}

        expect(isInArea(targetPosition, area)).toBeTruthy()
    })

    test("isInArea if target position is out of boundaries", () => {
        const area = {w: 5, h: 5}
        
        const testPositions = [{x: -1, y: 0}, {x: 5, y: 0}, {x: 0, y: -1}, {x: 0, y: 5}]

        expect(testPositions.every(p => isInArea(p, area))).toBeFalsy()
    })

    test('can find initial position', () => {
        const input = ".....\n.....\n...^.\n.....\n....."

        const initialPosition = findInitialPosition(input, 5, 5)

        expect(initialPosition).toEqual({x: 2, y: 3})
    })
})

describe("Simulation", () => {
    test("Quick turn", () => {
        const input = `..#..\n....#\n#.^..\n...#.\n.....`

        const result = simulate(input)

        expect(result.outcome).toBe(Outcome.EXITED)
        expect(result.uniquePositions.length).toEqual(7)
    })
})

describe("Loops", () => {
    test("Is loop if hits same point in same direction", () => {
        const input = `.##..\n....#\n#.^..\n.#.#.\n.....`

        const result = simulate(input)

        expect(result.outcome).toBe(Outcome.LOOP)
        expect(result.hits.length).toEqual(5)
    })
})
