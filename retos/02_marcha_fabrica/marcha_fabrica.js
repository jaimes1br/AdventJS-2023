const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials)
// console.log(manufacture(gifts, materials))

/**
 * Return of gifts that can be manufactured
 * 
 * @param {Array[string]} gifts Each string represents a gift
 * @param {string} materials Available materials 
 * @returns {Array[string]}
 */
function manufacture(gifts, materials) {
    return gifts.filter((gift) =>
        [...gift].every(char => materials.includes(char))
    )
}

module.exports = manufacture