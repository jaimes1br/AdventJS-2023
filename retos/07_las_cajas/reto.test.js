const drawGift = require('./las_cajas')

test('Test: return type',() => {
    expect(typeof drawGift(5, '*'))
        .toBe('string')
})

test('Test: drawGift(4, "+")',() => {
    expect(
        drawGift(4, "+")
    ).toBe("   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n")
})

test('Test: drawGift(5, "*")',() => {
    expect(
        drawGift(5, "*")
    ).toBe(`    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`)
})

test('Test: drawGift(1, "^")',() => {
    expect(
        drawGift(1, "^")
    ).toBe(`#\n`)
})

test('Test: drawGift(2, "&")',() => {
    expect(
        drawGift(2, "&")
    ).toBe(` ##\n###\n##\n`)
})

test('Test: drawGift(10, "%")',() => {
    expect(
        drawGift(10, "%")
    ).toBe(`         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n`)
})