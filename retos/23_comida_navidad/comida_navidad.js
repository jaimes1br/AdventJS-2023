const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ]
  
// console.log(organizeChristmasDinner(dishes))

function organizeChristmasDinner(dishes) {

    let allIingredients = dishes.reduce((acc,d) => acc.concat(d.slice(1)) ,[]) 

    allIingredients = [...new Set(allIingredients)]

    const all = []
    for (const ingre of allIingredients) {
        let tmp = []
        for (const dish of dishes) {
            if(dish.includes(ingre)){
                tmp.push(dish[0])
            }
        }

        if(tmp.length >= 2) all.push([ingre,...tmp.sort()])
    } 

    return all.sort()
}

module.exports = organizeChristmasDinner