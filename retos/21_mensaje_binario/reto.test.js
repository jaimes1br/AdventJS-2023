const findBalancedSegment = require('./mensaje_binario')

test('Test: return type',() => {
    expect(
        Array.isArray(findBalancedSegment([1, 1, 0,0])))
        .toBe(true)
})

test(`Test: findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])`, () => {
    expect(
        findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    ).toStrictEqual([2,5])
})

test(`Test: findBalancedSegment([1, 1, 0])`, () => {
    expect(
        findBalancedSegment([1, 1, 0])
    ).toStrictEqual([1,2])
})

test(`Test: findBalancedSegment([1, 1, 1])`, () => {
    expect(
        findBalancedSegment([1, 1, 1])
    ).toStrictEqual([])
})

test(`Test: findBalancedSegment([1, 0, 1])`, () => {
    expect(
        findBalancedSegment([1, 0, 1])
    ).toStrictEqual([0,1])
})

test(`Test: findBalancedSegment([1, 0, 1, 0])`, () => {
    expect(
        findBalancedSegment([1, 0, 1, 0])
    ).toStrictEqual([0,3])
})

test(`Test: findBalancedSegment([1, 1, 0, 1, 0, 1])`, () => {
    expect(
        findBalancedSegment([1, 1, 0, 1, 0, 1])
    ).toStrictEqual([1,4])
})

test(`Test: findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])`, () => {
    expect(
        findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    ).toStrictEqual([0,7])
})

test(`Test: indBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])`, () => {
    expect(
        findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    ).toStrictEqual([5,10])
})