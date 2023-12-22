// console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])) // [2,5]
// console.log(findBalancedSegment([1, 1, 0])) //[1,2]
// console.log(findBalancedSegment([1, 1, 0,0])) //[1,2]
// console.log(findBalancedSegment([1, 1, 1])) // []

/**
 * 
 * @param {Array[number]} message Message represented in binary
 * @returns {Array[number]} Longest segment of 0 and 1
 */
function findBalancedSegment(message) {
    let r = []

    for (let i = 0; i < message.length - 1; i++) {
        let zeros = 0, ones = 0;
        for (let j = i; j < message.length; j++) {
            message[j] ? ones++ : zeros++
            if(ones === zeros) r.push([i,j])
        }
    }

    let t = r.map(s => s[1] - s[0])
    let i = t.indexOf(Math.max(...t))
    return r[i] ?? []   
}

module.exports = findBalancedSegment