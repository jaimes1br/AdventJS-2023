console.log(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
])) // [[2, 8]]
// console.log(optimizeIntervals([
//     [1, 9999],
//     [2, 2],
//     [3, 4]
// ])) // [[1, 9999]]

// console.log(optimizeIntervals([
//     [1, 3],
//     [8, 10],
//     [2, 6]
//   ])) // [[1, 6], [8, 10]]

// console.log(optimizeIntervals([
//     [3, 4],
//     [1, 2],
//     [5, 6]
//   ]))// [[1, 2], [3, 4], [5, 6]]

// console.log(optimizeIntervals([[1, 15], [8, 12], [4, 7]]))

/**
 * 
 * @param {Array[numbers]} intervals Available intervals 
 * @returns {Array[Array[number]]} Valid intervals
 */
function optimizeIntervals(intervals) {
 
    intervals.sort((a,b) => a[0] - b[0])

    const result = [intervals[0]];

    for(let interval of intervals){
        let lastInterval = result[result.length-1];
        if(interval[0] <= lastInterval[1]){
            result[result.length-1][1] = Math.max(
                interval[1],
                lastInterval[1]
            );
        }else{
            result.push(interval)
        }
    }

    return result
}

module.exports = optimizeIntervals