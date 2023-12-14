console.log(createChristmasTree("123",4))
console.log(createChristmasTree("*@o",3))
// console.log(createChristmasTree("<",1))

/**
 * 
 * @param {string} ornaments Ornaments to place on the tree
 * @param {number} height Tree height
 * @returns {string} Custom tree
 */
function createChristmasTree(ornaments, height) {
    ornaments = ornaments.repeat(height**2).split('')
    
    let tree = ''
    for (let i = 1; i < height + 1; i++) {
        tree += ' '.repeat(height - i) + ornaments.splice(0,i).join(' ') + '\n' 
    }

    return `${tree}${'|'.padStart(height)}\n`
}

module.exports = createChristmasTree