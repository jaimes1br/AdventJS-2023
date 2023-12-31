const revealSabotage = require('./enfrenta_sabotaje')

test('Test: return type',() => {
    expect(
        Array.isArray(revealSabotage(['*', ' ', '*'])))
        .toBe(true)
})

test(`Test: revealSabotage([
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
  ])`, () => {
    expect(
        revealSabotage([
            ['*', ' ', ' ', ' '],
            [' ', ' ', '*', ' '],
            [' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ']
          ])
    ).toStrictEqual(
        [
            [
              "*",
              "2",
              "1",
              "1"
            ],
            [
              "1",
              "2",
              "*",
              "1"
            ],
            [
              "1",
              "2",
              "1",
              "1"
            ],
            [
              "*",
              "1",
              " ",
              " "
            ]
          ]
    )
})

test(`Test: revealSabotage([
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', ' ']
  ])`, () => {
    expect(
        revealSabotage([
            [' ', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', ' ']
          ])
    ).toStrictEqual(
        [
            [
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "*",
              "1"
            ],
            [
              "1",
              "1",
              "1"
            ]
          ]
    )
})

test(`Test: revealSabotage([
    ['*', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', '*']
  ])
  `, () => {
    expect(
        revealSabotage([
            ['*', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', '*']
          ])
          
    ).toStrictEqual([
        [
          "*",
          "2",
          "1"
        ],
        [
          "2",
          "*",
          "2"
        ],
        [
          "1",
          "2",
          "*"
        ]
      ])
})

test(`Test: revealSabotage([
    ['*', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ])`, () => {
    expect(
        revealSabotage([
            ['*', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
          ])
    ).toStrictEqual([
        [
          "*",
          "1",
          " "
        ],
        [
          "1",
          "1",
          " "
        ],
        [
          " ",
          " ",
          " "
        ]
      ])
})
test(`Test: revealSabotage([
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*']
  ])`, () => {
    expect(
        revealSabotage([
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*']
          ])
    ).toStrictEqual([
        [
          "*",
          "*",
          "*"
        ],
        [
          "*",
          "8",
          "*"
        ],
        [
          "*",
          "*",
          "*"
        ]
      ]
      )
})

test(`Test: revealSabotage([
    ['*', ' ', '*']
  ])
  `, () => {
    expect(
        revealSabotage([
            ['*', ' ', '*']
          ])                
    ).toStrictEqual([
        [
          "*",
          "2",
          "*"
        ]
      ])
})

test(`Test: revealSabotage([
    ['*', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', '*']
  ])`, () => {
    expect(
        revealSabotage([
            ['*', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', '*']
          ])
    ).toStrictEqual(
        [
            [
              "*",
              "1",
              " "
            ],
            [
              "1",
              "2",
              "1"
            ],
            [
              " ",
              "1",
              "*"
            ]
          ]
    )
})

test(`Test: revealSabotage([
    ['*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*']
  ])`, () => {
    expect(
        revealSabotage([
            ['*', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', '*', ' ', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '*']
          ])    
    ).toStrictEqual([
        [
          "*",
          "1",
          " ",
          " ",
          " "
        ],
        [
          "1",
          "2",
          "1",
          "1",
          " "
        ],
        [
          " ",
          "1",
          "*",
          "1",
          " "
        ],
        [
          " ",
          "1",
          "1",
          "2",
          "1"
        ],
        [
          " ",
          " ",
          " ",
          "1",
          "*"
        ]
      ])
})
