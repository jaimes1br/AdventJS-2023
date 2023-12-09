const decode = require('./vuelta_parentesis')

test('Test: return type',() => {
    expect(typeof decode('hola (odnum)'))
        .toBe('string')
})

test('Test: decode("hola (odnum)")',() => {
    expect(
        decode('hola (odnum)')
    ).toBe('hola mundo')
})

test('Test: decode("(olleh) (dlrow)!")',() => {
    expect(
        decode('(olleh) (dlrow)!')
    ).toBe("hello world!")
})

test('Test: decode("sa(u(cla)atn)s")',() => {
    expect(
        decode("sa(u(cla)atn)s")
    ).toBe("santaclaus")
})

test('Test: decode("((nta)(sa))")',() => {
    expect(
        decode('((nta)(sa))')
    ).toBe("santa")
})


