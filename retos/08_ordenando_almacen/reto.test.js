const organizeGifts = require('./ordenando_almacen')

test('Test: return type',() => {
    expect(typeof organizeGifts(`76a11b`))
        .toBe('string')
})

test('Test: organizeGifts("76a11b")',() => {
    expect(
        organizeGifts("76a11b")
    ).toBe("[a]{a}{a}(aaaaaa){b}(b)")
})

test('Test: organizeGifts("20a")',() => {
    expect(
        organizeGifts("20a")
    ).toBe("{a}{a}")
})

test('Test:  organizeGifts("70b120a4c")',() => {
    expect(
        organizeGifts("70b120a4c")
    ).toBe("[b]{b}{b}[a][a]{a}{a}(cccc)")
})

test('Test: organizeGifts("9c")',() => {
    expect(
        organizeGifts("9c")
    ).toBe("(ccccccccc)")
})

test('Test: organizeGifts("19d51e")',() => {
    expect(
        organizeGifts("19d51e")
    ).toBe("{d}(ddddddddd)[e](e)")
})

