const findNaughtyStep = require('./elfo_travieso')


test('Test: return type',() => {
    expect(typeof findNaughtyStep('abcd','abcde'))
        .toBe('string')
})

test('Test: findNaughtyStep("abcd", "abcde")',() => {
    expect(
        findNaughtyStep('abcd', 'abcde')
    ).toBe('e')
})

test("Test: findNaughtyStep('abcde', 'abcd')",() => {
    expect(
        findNaughtyStep('abcde', 'abcd')
    ).toBe("e")
})

test('Test: findNaughtyStep("xxxx", "xxoxx")',() => {
    expect(
        findNaughtyStep('xxxx', 'xxoxx')
    ).toBe('o')
})

test('Test: findNaughtyStep("stepfor", "stepor")',() => {
    expect(
        findNaughtyStep('stepfor', 'stepor')
    ).toBe('f')
})

test('Test: findNaughtyStep("iiiii", "iiiii")',() => {
    expect(
        findNaughtyStep('iiiii', 'iiiii')
    ).toBe("")
})