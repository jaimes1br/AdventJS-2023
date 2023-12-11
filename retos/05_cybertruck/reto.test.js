const cyberReindeer = require('./cybertruck')

test('Test: return type',() => {
    expect(
        Array.isArray(cyberReindeer('S..||...|..', 10)))
        .toBe(true)
})

test("Test: cyberReindeer('S..|...|..', 10)", () => {
    expect(
        cyberReindeer('S..|...|..', 10)
    ).toStrictEqual(
        [
            "S..|...|..",
            ".S.|...|..",
            "..S|...|..",
            "..S|...|..",
            "..S|...|..",
            "...S...*..",
            "...*S..*..",
            "...*.S.*..",
            "...*..S*..",
            "...*...S.."
        ]
    )
})

test("Test: cyberReindeer('S.|.', 4)", () => {
    expect(
        cyberReindeer('S.|.', 4)
    ).toStrictEqual(
        [
            "S.|.",
            ".S|.",
            ".S|.",
            ".S|."
        ]
    )
})

test("Test: cyberReindeer('S.|.|.', 7)", () => {
    expect(
        cyberReindeer('S.|.|.', 7)
    ).toStrictEqual(
        [
            "S.|.|.",
            ".S|.|.",
            ".S|.|.",
            ".S|.|.",
            ".S|.|.",
            "..S.*.",
            "..*S*."
        ]
    )
})

test("Test: cyberReindeer('S.|..', 6)", () => {
    expect(
        cyberReindeer('S.|..', 6)
    ).toStrictEqual(
        [
            "S.|..",
            ".S|..",
            ".S|..",
            ".S|..",
            ".S|..",
            "..S.."
        ]
    )
})

test("Test: cyberReindeer('S.|.|.|......|.||.........', 8)", () => {
    expect(
        cyberReindeer('S.|.|.|......|.||.........', 8)
    ).toStrictEqual(
        [
            "S.|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            "..S.*.*......*.**.........",
            "..*S*.*......*.**.........",
            "..*.S.*......*.**........."
        ]
    )
})