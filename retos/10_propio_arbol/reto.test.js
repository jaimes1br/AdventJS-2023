const createChristmasTree = require('./propio_arbol')

test('Test: return type',() => {
    expect(typeof createChristmasTree("*@o",3))
        .toBe('string')
})

test('Test: createChristmasTree("x", 3)',() => {
    expect(
        createChristmasTree("x", 3)
    ).toBe("  x\n x x\nx x x\n  |\n")
})

test('Test: createChristmasTree("xo", 4)',() => {
    expect(
        createChristmasTree("xo", 4)
    ).toBe("   x\n  o x\n o x o\nx o x o\n   |\n")
})

test('Test: createChristmasTree("123", 5)',() => {
    expect(
        createChristmasTree("123", 5)
    ).toBe("    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n")
})

test('Test: createChristmasTree("*@o", 3)',() => {
    expect(
        createChristmasTree("*@o", 3)
    ).toBe("  *\n @ o\n* @ o\n  |\n")
})
