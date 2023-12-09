const original = 'abcd'
const modified = 'abcde'
// console.log(findNaughtyStep(original, modified))


/**
 * Step modified or eliminated
 * 
 * @param {string} original original manufacturing steps
 * @param {string} modified modified manufacturing steps 
 * @returns {string} Step modified or eliminated
 */
function findNaughtyStep(original, modified) {   
    if(original.length < modified.length){
        [original,modified] = [modified,original]
    }

    return [...original].filter((l,i) => l !== modified[i])[0] ?? ''
}

module.exports = findNaughtyStep