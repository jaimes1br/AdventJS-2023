const maxDistance = require('./renos')

test('Test: return type',() => {
    expect(
        Number.isNaN(maxDistance('>>*<')))
        .toBe(false)
})

test('Test: maxDistance(">>*<")',() => {
    expect(
        maxDistance(">>*<")
    ).toBe(2)
})

test('Test: maxDistance("<<<<<")',() => {
    expect(
        maxDistance("<<<<<")
    ).toBe(5)
})

test('Test: maxDistance(">***>")',() => {
    expect(
        maxDistance(">***>")
    ).toBe(5)
})

test('Test: maxDistance("**********")',() => {
    expect(
        maxDistance("**********")
    ).toBe(10)
})

test('Test: maxDistance("<<**>>")',() => {
    expect(
        maxDistance("<<**>>")
    ).toBe(2)
})