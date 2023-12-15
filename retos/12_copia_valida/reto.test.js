const checkIsValidCopy =  require('./copia_valida')

test('Test: return type',() => {
    expect(typeof checkIsValidCopy('3 #egalos', '3 .+:# #:'))
        .toBe('boolean')
})

test("Test: checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')",() => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'))
        .toBeTruthy()
})

test("Test: checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')",() => {
    expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'))
        .toBeFalsy()
})

test("Test: checkIsValidCopy('Santa Claus', ' Santa Claus ')",() => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus '))
        .toBeFalsy()
})

test("Test: checkIsValidCopy('Santa Claus', '###:. c:+##')",() => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##'))
        .toBeTruthy()
})

test("Test: checkIsValidCopy('Santa Claus', 'sant##claus+')",() => {
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')    )
        .toBeFalsy()
})

test("Test: checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')",() => {
    expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s'))
        .toBeTruthy()
})

test("Test: checkIsValidCopy('Santa Claus', 's#+:.#c:. s')",() => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'))
        .toBeFalsy()
})

test("Test: checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')",() => {
    expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'))
        .toBeFalsy()
})

test("Test: checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')",() => {
    expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS'))
        .toBeFalsy()
})

test("Test: checkIsValidCopy('3 #egalos', '3 .+:# #:')",() => {
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:'))
        .toBeTruthy()
})

test("Test: checkIsValidCopy('3 regalos', '3        ')",() => {
    expect(checkIsValidCopy('3 regalos', '3        '))
        .toBeTruthy()
})

test("Test: checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')",() => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3'))
        .toBeTruthy()
})

test("Test:  checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')",() => {
    expect(checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño'))
        .toBeFalsy()
})

