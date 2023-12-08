const manufacture = require('./marcha_fabrica')

test('Test: return type',() => {
    expect(
        Array.isArray(manufacture(['tren', 'oso', 'pelota'],'tronesa')))
        .toBe(true)
})

test("Test: manufacture(['tren', 'oso', 'pelota'], 'tronesa')", () => {
    expect(
        manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    ).toStrictEqual(
        [
            "tren",
            "oso"
        ]
    )
})

test("Test: manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')", () => {
    expect(
        manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')
        ).toStrictEqual(
        []
    )
})

test("Test: manufacture(['patineta', 'robot', 'libro'], 'nopor')", () => {
    expect(
        manufacture(['patineta', 'robot', 'libro'], 'nopor')
        ).toStrictEqual(
        []
    )
})

test("Test: manufacture([], 'letras')", () => {
    expect(
        manufacture([], 'letras')
        ).toStrictEqual(
        []
    )
})