// console.log(maxGifts([2, 4, 2])) // 4 (4)
// console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)) 
// console.log(maxGifts([4, 1, 1, 4, 2, 1])) //9

/**
 * 
 * @param {Array[number]} houses Represents the number of gifts in each house
 * @returns {Number} Maximum number of gifts to be delivered
 */
function maxGifts(houses) {
    let prev = 0
    let curr = 0

    for (const gifts of houses) {
        let tmp = Math.max(curr,prev + gifts);
        [prev,curr] = [curr,tmp]
    }

    return curr
}

module.exports = maxGifts