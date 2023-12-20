const transformTree = require('./despliegue_viernes')


test('Test: return type',() => {
    expect(typeof transformTree([3, 1, 0]))
        .toBe('object')
})

test("Test: transformTree([])", () => {
    expect(
        transformTree([])
    ).toStrictEqual(null)
})

test("Test: transformTree([1])", () => {
    expect(
        transformTree([1])
    ).toMatchObject({
        "value": 1,
        "left": null,
        "right": null
    })
})

test("Test: transformTree([1, 2, 3])", () => {
    expect(
        transformTree([1, 2, 3])
    ).toMatchObject({
        "value": 1,
        "left": {
          "value": 2,
          "left": null,
          "right": null
        },
        "right": {
          "value": 3,
          "left": null,
          "right": null
        }
    })
})

test("Test: transformTree([1, 2, 3, 4, 5])", () => {
    expect(
        transformTree([1, 2, 3, 4, 5])
    ).toMatchObject({
        "value": 1,
        "left": {
          "value": 2,
          "left": {
            "value": 4,
            "left": null,
            "right": null
          },
          "right": {
            "value": 5,
            "left": null,
            "right": null
          }
        },
        "right": {
          "value": 3,
          "left": null,
          "right": null
        }
    })
})

test("Test: transformTree([1, 2, 3, 4, 5, 6, 7])", () => {
    expect(
        transformTree([1, 2, 3, 4, 5, 6, 7])
    ).toMatchObject({
        "value": 1,
        "left": {
          "value": 2,
          "left": {
            "value": 4,
            "left": null,
            "right": null
          },
          "right": {
            "value": 5,
            "left": null,
            "right": null
          }
        },
        "right": {
          "value": 3,
          "left": {
            "value": 6,
            "left": null,
            "right": null
          },
          "right": {
            "value": 7,
            "left": null,
            "right": null
          }
        }
    })
})

test("Test: transformTree([17, 0, null, null, 1])", () => {
    expect(
        transformTree([17, 0, null, null, 1])
    ).toMatchObject({
        "value": 17,
        "left": {
          "value": 0,
          "left": null,
          "right": {
            "value": 1,
            "left": null,
            "right": null
          }
        },
        "right": null
    })
})

test("Test: transformTree([3, 1, 0, 8, 12, null, 1])", () => {
    expect(
        transformTree([3, 1, 0, 8, 12, null, 1])
    ).toMatchObject({
        "value": 3,
        "left": {
          "value": 1,
          "left": {
            "value": 8,
            "left": null,
            "right": null
          },
          "right": {
            "value": 12,
            "left": null,
            "right": null
          }
        },
        "right": {
          "value": 0,
          "left": null,
          "right": {
            "value": 1,
            "left": null,
            "right": null
          }
        }
    })
})

test("Test: transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])", () => {
    expect(
        transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])
    ).toMatchObject({
        "value": 2,
        "left": {
          "value": 7,
          "left": null,
          "right": {
            "value": 6,
            "left": {
              "value": 1,
              "left": null,
              "right": null
            },
            "right": {
              "value": 11,
              "left": null,
              "right": null
            }
          }
        },
        "right": {
          "value": 5,
          "left": null,
          "right": {
            "value": 9,
            "left": null,
            "right": {
              "value": 10,
              "left": null,
              "right": null
            }
          }
        }
    })
})