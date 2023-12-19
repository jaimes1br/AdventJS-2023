const maxGifts = require('./evita_alarma')

test('Test: return type',() => {
    expect(
        Number.isNaN(maxGifts([2, 4, 2])))
        .toBe(false)
})

test('Test: maxGifts([1, 2, 3, 1])',() => {
    expect(
        maxGifts([1, 2, 3, 1])
    ).toBe(4)
})

test('Test: maxGifts([2, 7, 9, 3, 1])',() => {
    expect(
        maxGifts([2, 7, 9, 3, 1])
    ).toBe(12)
})

test('Test: maxGifts([0, 0, 0, 0, 1])',() => {
    expect(
        maxGifts([0, 0, 0, 0, 1])
    ).toBe(1)
})

test('Test: maxGifts([100])',() => {
    expect(
        maxGifts([100])
    ).toBe(100)
})

test('Test: maxGifts([1, 1, 1, 1])',() => {
    expect(
        maxGifts([1, 1, 1, 1])
    ).toBe(2)
})

test('Test: maxGifts([1, 1, 1])',() => {
    expect(
        maxGifts([1, 1, 1])
    ).toBe(2)
})

test('Test: maxGifts([3, 4, 5])',() => {
    expect(
        maxGifts([3, 4, 5])
    ).toBe(8)
})

test('Test: maxGifts([99])',() => {
    expect(
        maxGifts([99])
    ).toBe(99)
})