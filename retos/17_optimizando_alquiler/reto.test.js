const optimizeIntervals = require('./optimizando_alquiler')

test('Test: return type',() => {
    expect(
        Array.isArray(optimizeIntervals([
            [5, 8],
            [2, 7],
            [3, 4]
        ])))
        .toBe(true)
})

test("Test: optimizeIntervals([[2, 7], [3, 4], [5, 8]])", () => {
    expect(
        optimizeIntervals([[2, 7], [3, 4], [5, 8]])
        ).toStrictEqual(
        [
            [
                2,
                8
            ]
        ]
    )
})

test("Test: optimizeIntervals([[3, 4], [5, 8], [2, 7]])", () => {
    expect(
        optimizeIntervals([[3, 4], [5, 8], [2, 7]])
        ).toStrictEqual(
        [
            [
                2,
                8
            ]
        ]              
    )
})

test("Test:  optimizeIntervals([[1, 3], [2, 6], [8, 10]])", () => {
    expect(
        optimizeIntervals([[1, 3], [2, 6], [8, 10]])
    ).toStrictEqual(
        [
            [
              1,
              6
            ],
            [
              8,
              10
            ]
        ]
    )
})

test("Test: optimizeIntervals([[1, 2], [3, 4], [5, 6]])", () => {
    expect(
        optimizeIntervals([[1, 2], [3, 4], [5, 6]])
    ).toStrictEqual(
        [
            [
              1,
              2
            ],
            [
              3,
              4
            ],
            [
              5,
              6
            ]
        ]           
    )
})

test("Test: optimizeIntervals([[5, 7], [6, 8]])", () => {
    expect(
        optimizeIntervals([[5, 7], [6, 8]])
        ).toStrictEqual(
        [
            [
                5,
                8
            ]
        ]
    )
})

test("Test: optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])", () => {
    expect(
        optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])
        ).toStrictEqual(
            [
                [
                  1,
                  5
                ],
                [
                  6,
                  10
                ],
                [
                  11,
                  15
                ],
                [
                  16,
                  20
                ]
              ]
              
    )
})

test("Test: optimizeIntervals([[1, 15], [8, 12], [4, 7]])", () => {
    expect(
        optimizeIntervals([[1, 15], [8, 12], [4, 7]])
        ).toStrictEqual(
        [
            [
                1,
                15
            ]
        ]  
    )
})