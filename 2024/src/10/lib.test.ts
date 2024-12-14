import { buildMap, mapReachable, mapTrailheads, rating, score } from "./lib"

test("map trailheads gives all start indexes", () => {
    const input = `10..9..\n2...8..\n3...7..\n4567654\n...8..3\n...9..2\n.....01`
    
    const map = mapTrailheads(buildMap(input))

    expect(map).toEqual([[0, 1], [6, 5]])
})

test("map map next gives all next steps giving a position", () => {
    const input = `101....\n.1.....\n.......\n.......\n.......\n.......\n.......`
    const map = buildMap(input)

    const next = mapReachable([0, 1], map, 1)

    expect(new Set(next)).toEqual(new Set([[0, 0], [1, 1], [0, 2]]))
})

test("map map reachable gives all reachable positions", () => {
    const input = `10..9..\n2...8..\n3...7..\n4567654\n...8..3\n...9..2\n.....01`
    const map = buildMap(input)

    const reachable = mapReachable([0, 1], map)

    expect(reachable).toEqual([[5, 3]])
})

test("map map reachable gives all reachable positions for multiple outcomes", () => {
    const input = `10..9..\n2...8..\n3...7..\n4567654\n...8..3\n...9..2\n.....01`
    const map = buildMap(input)

    const reachable = mapReachable([6, 5], map)

    expect(reachable).toEqual([[0, 4], [5, 3]])
})

test("score counts distinct forms", () => {
    const input = `..90..9\n...1.98\n...2..7\n6543456\n765.987\n876....\n987....`
    const map = buildMap(input)

    const reachable = mapReachable([0, 3], map)

    expect(score(reachable)).toEqual(4)
})

test("rating counts all forms", () => {
    const input = `012345\n123456\n234567\n345678\n4.6789\n56789.`

    const map = buildMap(input)

    const reachable = mapReachable([0, 0], map)

    expect(rating(reachable)).toEqual(227)
})