const travelDistance = require('./calculando_distancias')

test("Test: return type",() => {
    expect(
        Number.isNaN(travelDistance(`..S.1...`)))
        .toBe(false)
})

test('Test: travelDistance(`.....1....\n..S.......\n..........\n....3.....\n......2...`)',() => {
    expect(
        travelDistance(`.....1....\n..S.......\n..........\n....3.....\n......2...`)
    ).toBe(12)
})

test('Test: travelDistance(`..S.1...`)',() => {
    expect(
        travelDistance(`..S.1...`)
    ).toBe(2)
})

test('Test: travelDistance(`.....2....\n..S.......\n..........\n....1.....\n......3...`)',() => {
    expect(
        travelDistance(`.....2....\n..S.......\n..........\n....1.....\n......3...`)
    ).toBe(13)
})

test('Test: travelDistance(`3....1....\n..S.......\n.........2\n..........\n......4...`)',() => {
    expect(
        travelDistance(`3....1....\n..S.......\n.........2\n..........\n......4...`)
    ).toBe(31)
})

test('Test: travelDistance(`S1`)',() => {
    expect(
        travelDistance(`S1`)
    ).toBe(1)
})

test('Test: travelDistance(`1....S`)',() => {
    expect(
        travelDistance(`1....S`)
    ).toBe(5)
})

test('Test: travelDistance(`S12....3`)',() => {
    expect(
        travelDistance(`S12....3`)
    ).toBe(7)
})

