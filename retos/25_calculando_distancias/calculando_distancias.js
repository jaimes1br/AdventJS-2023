const map = `.....1....
..S.......
..........
....3.....
......2...`

console.log( travelDistance(map)) // -> 12 km
console.log(travelDistance(`..S.1...`)) // -> 2 km


function travelDistance(map) {
    const newMap = map.split('\n')
    const regex = /\d/g

    let s = []
    let nums = {}
    let i = 0
    let match;
    let km = 0;

    for (const line of newMap) {
        if(line.includes('S')){
            s = [i,line.indexOf('S')]
        }

        while((match = regex.exec(line)) !== null){
            nums[+match[0]] = [i,match.index]
        }   
        i++
    }

    for (const num in nums) {
        let [x,y] = nums[num];
        km += Math.abs((s[0]-x)) + Math.abs((s[1]-y));
        s = [x,y];
    }

    return km
}

module.exports = travelDistance