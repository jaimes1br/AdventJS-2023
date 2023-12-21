const drawClock = require('./reloj_digital')

test('Test: return type',() => {
    expect(
        Array.isArray(drawClock('01:30')))
        .toBe(true)
})

test("Test: drawClock('01:30')", () => {
    expect(
        drawClock('01:30')
    ).toStrictEqual(
        [
            [
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ]
          ]
    )
})

test("Test: drawClock('23:45')", () => {
    expect(
        drawClock('23:45')
    ).toStrictEqual(
        [
            [
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " "
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " "
            ],
            [
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*"
            ]
          ]
    )
})

test("Test: drawClock('16:48')", () => {
    expect(
        drawClock('16:48')
    ).toStrictEqual(
        [
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*"
            ]
          ]
    )
})

test("Test: drawClock('17:39')", () => {
    expect(
        drawClock('17:39')
    ).toStrictEqual(
        [
            [
              " ",
              " ",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*"
            ]
          ]
    )
})

test("Test: drawClock('00:21')", () => {
    expect(
        drawClock('00:21')
    ).toStrictEqual(
        [
            [
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              "*",
              " ",
              " ",
              " ",
              "*",
              " ",
              " ",
              " ",
              " ",
              " ",
              "*"
            ],
            [
              "*",
              "*",
              "*",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*",
              "*",
              "*",
              " ",
              " ",
              " ",
              "*"
            ]
          ]
    )
})