const autonomousDrive = require('./robot_autonomo')

test('Test: return type',() => {
    expect(
        Array.isArray(autonomousDrive( ['..!....', '...*.*.'],['R', 'R', 'D', 'L'])))
        .toBe(true)
})

test("Test: autonomousDrive(['..!....'], ['R', 'L'])", () => {
    expect(
        autonomousDrive(['..!....'], ['R', 'L'])
    ).toStrictEqual(
        [
            "..!...."
        ]
    )
})

test("Test: autonomousDrive(['!..', '***'], ['R', 'L'])", () => {
    expect(
        autonomousDrive(['!..', '***'], ['R', 'L'])
    ).toStrictEqual(
        [
            "!..",
            "***"
        ]
    )
})

test("Test:  autonomousDrive(['..!....','......*'],['R', 'D', 'L'])", () => {
    expect(
        autonomousDrive(
            [
              '..!....',
              '......*'
            ],
            ['R', 'D', 'L'])
    ).toStrictEqual(
        [
            ".......",
            "..!...*"
        ]
    )
})

test("Test: autonomousDrive(['*..!..*','*.....*'],['R', 'R', 'D', 'D'])", () => {
    expect(
        autonomousDrive(
            [
              '*..!..*',
              '*.....*'
            ],
            ['R', 'R', 'D', 'D'])
            
    ).toStrictEqual(
        [
            "*.....*",
            "*....!*"
        ]
    )
})

test("Test: autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])", () => {
    expect(
        autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    ).toStrictEqual(
        [
            "***",
            "..!",
            "***"
        ]
    )
})

test("Test: autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])", () => {
    expect(
        autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    ).toStrictEqual(
        [
            "***",
            "*!*",
            "***"
        ]
    )
})

test("Test: autonomousDrive(['.**.*.*.','.***....','..!.....'], ['D', 'U', 'R', 'R', 'R'])", () => {
    expect(
        autonomousDrive(
            [
              '.**.*.*.',
              '.***....',
              '..!.....'
            ], ['D', 'U', 'R', 'R', 'R'])
    ).toStrictEqual(
        [
            ".**.*.*.",
            ".***....",
            ".....!.."
        ]
    )
})