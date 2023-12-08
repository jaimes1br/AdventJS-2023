const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId);

/**
 * Returns the id of the repeated gift with the smallest index of the repeated gifts
 * 
 * @param {Array[number]} gifts array containing the gift ids
 * @returns {number} The repeated element with the lower index
 */
function findFirstRepeated(gifts) {    
    const options = gifts.reduce((acc,gift,i) => {
        if(gifts.indexOf(gift,i+1) !== -1)
            acc.push(gifts.indexOf(gift,i+1));
        return acc
    },[]);

    return gifts[Math.min(...options)] ?? -1
}

module.exports = findFirstRepeated