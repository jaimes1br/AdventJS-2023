const findFirstRepeated = require('./primer_regalo')


test('Test: return type',() => {
    expect(
        Number.isNaN(findFirstRepeated([2, 1, 3, 5, 3, 2])))
        .toBe(false)
})

test('Test: findFirstRepeated([2, 1, 3, 5, 3, 2])',() => {
    expect(
        findFirstRepeated([2, 1, 3, 5, 3, 2])
    ).toBe(3)
})

test('Test: findFirstRepeated([2, 2])',() => {
    expect(
        findFirstRepeated([2, 2])
    ).toBe(2)
})

test('Test: findFirstRepeated([2, 4, 3, 5, 1])',() => {
    expect(
        findFirstRepeated([2, 4, 3, 5, 1])
    ).toBe(-1)
})

test('Test: findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])',() => {
    expect(
        findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])
    ).toBe(1)
})

test('Test: findFirstRepeated([])',() => {
    expect(
        findFirstRepeated([])
    ).toBe(-1)
})

test('Test:  findFirstRepeated([10, 20, 30])',() => {
    expect(
        findFirstRepeated([10, 20, 30])
    ).toBe(-1)
})

test('Test: findFirstRepeated([5, 1, 2, 3, 2, 5, 1])',() => {
    expect(
        findFirstRepeated([5, 1, 2, 3, 2, 5, 1])
    ).toBe(2)
})

test('Test: findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])',() => {
    expect(
        findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])
    ).toBe(10)
})