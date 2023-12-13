const result1 = organizeGifts(`76a11b`)
console.log(result1)
// console.log(organizeGifts("20a"));
// console.log(organizeGifts("19d51e"));

/**
 * 
 * @param {string} gifts  String containing the entry gift code 
 * @returns {string} Storage of all gifts
 */
function organizeGifts(gifts) {
    
    const matches = gifts.match(/\d*\w/g)
    let draft = ''
    for (const match of matches) {        
        const l = match.at(-1)
        const num = +match.slice(0,-1)

        const [pales,resP] = [Math.trunc(num/50),num%50]
        const [cajas,resC] = [Math.trunc(resP/10),resP%10]

        if(pales) draft += `[${l}]`.repeat(pales) 
        if(cajas) draft += `{${l}}`.repeat(cajas) 
        if(resC)  draft += `(${l.repeat(resC)})` 
    }

    return draft
}

module.exports = organizeGifts