const organizeChristmasDinner = require('./comida_navidad')

test('Test: return type',() => {
    expect(
        Array.isArray(organizeChristmasDinner([
            ["fruit salad", "apple", "banana", "orange"],
            ["berry smoothie", "blueberry", "banana", "milk"],
            ["apple pie", "apple", "sugar", "flour"]
          ])))
        .toBe(true)
})

test(`Test: organizeChristmasDinner([
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"]
  ])
`, () => {
    expect(
        organizeChristmasDinner([
            ["christmas turkey", "turkey", "sauce", "herbs"],
            ["cake", "flour", "sugar", "egg"],
            ["hot chocolate", "chocolate", "milk", "sugar"],
            ["pizza", "sauce", "tomato", "cheese", "ham"]
          ])    
    ).toStrictEqual([
        [
          "sauce",
          "christmas turkey",
          "pizza"
        ],
        [
          "sugar",
          "cake",
          "hot chocolate"
        ]
      ])
})

test(`Test: organizeChristmasDinner([
    ["fruit salad", "apple", "banana", "orange"],
    ["berry smoothie", "blueberry", "banana", "milk"],
    ["apple pie", "apple", "sugar", "flour"]
  ])`, () => {
    expect(
        organizeChristmasDinner([
            ["fruit salad", "apple", "banana", "orange"],
            ["berry smoothie", "blueberry", "banana", "milk"],
            ["apple pie", "apple", "sugar", "flour"]
          ])
    ).toStrictEqual([
        [
          "apple",
          "apple pie",
          "fruit salad"
        ],
        [
          "banana",
          "berry smoothie",
          "fruit salad"
        ]
      ])
})

test(`Test: organizeChristmasDinner([
    ["gingerbread", "flour", "ginger", "sugar"],
    ["glazed ham", "ham", "honey", "sugar", "vinegar"],
    ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
    ["vegetable soup", "carrot", "potato", "onion", "garlic"],
    ["fruit punch", "apple juice", "orange juice", "sugar"]
  ])`, () => {
    expect(
        organizeChristmasDinner([
            ["gingerbread", "flour", "ginger", "sugar"],
            ["glazed ham", "ham", "honey", "sugar", "vinegar"],
            ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
            ["vegetable soup", "carrot", "potato", "onion", "garlic"],
            ["fruit punch", "apple juice", "orange juice", "sugar"]
          ])
    ).toStrictEqual([
        [
          "garlic",
          "roast chicken",
          "vegetable soup"
        ],
        [
          "sugar",
          "fruit punch",
          "gingerbread",
          "glazed ham"
        ]
      ])
})

test(`Test:  organizeChristmasDinner([
    ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
    ["mashed potatoes", "potatoes", "butter", "milk"],
    ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
    ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
  ])`, () => {
    expect(
        organizeChristmasDinner([
            ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
            ["mashed potatoes", "potatoes", "butter", "milk"],
            ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
            ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
          ])
    ).toStrictEqual([
        [
          "butter",
          "cinnamon rolls",
          "mashed potatoes",
          "turkey stuffing"
        ],
        [
          "cinnamon",
          "cinnamon rolls",
          "pumpkin pie"
        ],
        [
          "flour",
          "cinnamon rolls",
          "pumpkin pie"
        ],
        [
          "sugar",
          "cinnamon rolls",
          "pumpkin pie"
        ]
      ])
})

test(`Test: organizeChristmasDinner([
    ["chicken alfredo", "chicken", "pasta", "parmesan"],
    ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
    ["pasta salad", "pasta", "olive oil", "tomato"],
    ["tomato soup", "tomato", "basil", "cream"]
  ])`, () => {
    expect(
        organizeChristmasDinner([
            ["chicken alfredo", "chicken", "pasta", "parmesan"],
            ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
            ["pasta salad", "pasta", "olive oil", "tomato"],
            ["tomato soup", "tomato", "basil", "cream"]
          ])
    ).toStrictEqual([
        [
          "chicken",
          "chicken alfredo",
          "parmesan chicken"
        ],
        [
          "parmesan",
          "chicken alfredo",
          "parmesan chicken"
        ],
        [
          "pasta",
          "chicken alfredo",
          "pasta salad"
        ],
        [
          "tomato",
          "pasta salad",
          "tomato soup"
        ]
      ])
})

test(`Test: organizeChristmasDinner([
    ["snowflake cookies", "flour", "sugar", "vanilla"],
    ["winter stew", "beef", "carrots", "potatoes"],
    ["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
    ["festive salad", "lettuce", "cranberries", "walnuts"]
  ])`, () => {
    expect(
        organizeChristmasDinner([
            ["snowflake cookies", "flour", "sugar", "vanilla"],
            ["winter stew", "beef", "carrots", "potatoes"],
            ["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
            ["festive salad", "lettuce", "cranberries", "walnuts"]
          ])
    ).toStrictEqual([])
})