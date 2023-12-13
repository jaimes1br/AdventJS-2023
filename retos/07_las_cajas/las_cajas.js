// console.log(drawGift(4, '+'))
// console.log(drawGift(5, '*'));
// console.log(drawGift(1, '^'))

/**
 * 
 * @param {number} size  Gift face size 
 * @param {string} symbol Symbol for gift faces
 * @returns {string} Represents the gift in 3d
 */
function drawGift(size, symbol) {

    if(size === 1) return '#\n'

    const base = size - 2
    const top = `${'#'.repeat(size)}\n`
    const medio = `${'#'.repeat(size)}${symbol.repeat(base)}#\n`
    
    let arriba = ''
    let abajo = []
    for (let i = 0; i < base; i++) {
        const temp = `#${symbol.repeat(base)}#${symbol.repeat(i)}#`
        arriba += `${' '.repeat(base - i)}${temp}\n`
        abajo[base - i - 1] = temp + '\n' 
    }
    
    return ' '.repeat(size - 1) +  top + arriba + medio + abajo.join('') + top
}

module.exports = drawGift