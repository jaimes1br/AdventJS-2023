const getIndexsForPalindrome = require('./elfos_estudiosos')


test('Test: return type',() => {
    expect(
        Array.isArray(getIndexsForPalindrome('anna')))
        .toBe(true)
})

test("Test: getIndexsForPalindrome('anna')", () => {
    expect(
        getIndexsForPalindrome('anna')
    ).toStrictEqual(
        []
    )
})

test("Test: getIndexsForPalindrome('abab')", () => {
    expect(
        getIndexsForPalindrome('abab')
    ).toStrictEqual(
        [0,1]
    )
})

test("Test: getIndexsForPalindrome('abac')", () => {
    expect(
        getIndexsForPalindrome('abac')
    ).toStrictEqual(
        null
    )
})

test("Test: getIndexsForPalindrome('aaaaaaaa')", () => {
    expect(
        getIndexsForPalindrome('aaaaaaaa')
    ).toStrictEqual(
        []
    )
})

test("Test: getIndexsForPalindrome('aaababa')", () => {
    expect(
        getIndexsForPalindrome('aaababa')
    ).toStrictEqual(
        [1,3]
    )
})

test("Test: getIndexsForPalindrome('caababa')", () => {
    expect(
        getIndexsForPalindrome('caababa')
    ).toStrictEqual(
        null
    )
})

test("Test: getIndexsForPalindrome('rotavator')", () => {
    expect(
        getIndexsForPalindrome('rotavator')
    ).toStrictEqual(
        []
    )
})

test("Test: getIndexsForPalindrome('rotaratov')", () => {
    expect(
        getIndexsForPalindrome('rotaratov')
    ).toStrictEqual(
        [4,8]
    )
})

test("Test: getIndexsForPalindrome('saippuakivikauppias')", () => {
    expect(
        getIndexsForPalindrome('saippuakivikauppias')
    ).toStrictEqual(
        []
    )
})