const compile = require("./lenguaje_programacion")

test("Test: return type",() => {
    expect(
        Number.isNaN(compile('-+¿+?')))
        .toBe(false)
})

test("Test: compile('++*-')",() => {
    expect(
        compile('++*-')
    ).toBe(3)
})

test("Test:  compile('++¿+?')",() => {
    expect(
        compile('++¿+?')
    ).toBe(3)
})

test("Test: compile('-+¿+?')",() => {
    expect(
        compile('-+¿+?')
    ).toBe(0)
})

test("Test: compile('++*¿-?')",() => {
    expect(
        compile('++*¿-?')
    ).toBe(3)
})

test("Test: compile('++%++<')",() => {
    expect(
        compile('++%++<')
    ).toBe(6)
})

test("Test: compile('++%++<++¿*?')",() => {
    expect(
        compile('++%++<++¿*?')
    ).toBe(16)
})

test("Test: compile('++¿+?¿+?¿+?')",() => {
    expect(
        compile('++¿+?¿+?¿+?')
    ).toBe(5)
})

test("Test: compile('--¿+++?')",() => {
    expect(
        compile('--¿+++?')
    ).toBe(-2)
})

test("Test: compile('--¿+++?+++¿--?')",() => {
    expect(
        compile('--¿+++?+++¿--?')
    ).toBe(-1)
})

test("Test: compile('<%+¿++%++<?')",() => {
    expect(
        compile('<%+¿++%++<?')
    ).toBe(7)
})

test("Test: compile('<<<<<<+<<<<<+%')",() => {
    expect(
        compile('<<<<<<+<<<<<+%')
    ).toBe(2)
})
