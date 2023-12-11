const movements3 = '>***>'
const result3 = maxDistance(movements3)
// console.log(result3) // -> 5

function maxDistance(movements) {
    const opcV = {
        '>': 1,
        '<': -1 
    }

    const values = ['>','<'].map( opc => { 
        return Math.abs(
            movements.replaceAll('*',opc)
                .split('')
                .reduce((acc,c) => acc += opcV[c],0)
        )
    })

    return Math.max(...values)
}

module.exports = maxDistance