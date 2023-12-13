const adjustLights = require('./alternar_luces')

test('Test: return type',() => {
    expect(
        Number.isNaN(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])))
        .toBe(false)
})

test('Test: adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])',() => {
    expect(
        adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])
    ).toBe(1)
})

test('Test: adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])',() => {
    expect(
        adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])
    ).toBe(2)
})

test('Test: adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])',() => {
    expect(
        adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])
    ).toBe(0)
})

test('Test: adjustLights(["🔴", "🔴", "🔴"])',() => {
    expect(
        adjustLights(["🔴", "🔴", "🔴"])
    ).toBe(1)
})
