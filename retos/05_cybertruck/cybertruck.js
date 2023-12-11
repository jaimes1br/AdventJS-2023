const road = 'S..||...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
// console.log(result);

function cyberReindeer(road, time) {
    
    let results = [road]
    let s = 0
    let lastChar = '.'
    for (let i = 0; i < time - 1 ; i++) {
        let tmp = results[i]
        
        if(i === 4) tmp = tmp.replaceAll('|','*')

        tmp = tmp.split('')
        if(tmp[s+1] === '.' || tmp[s+1] === '*'){
            [tmp[s],lastChar] = [lastChar,tmp[s+1]]
            tmp[s+1] = 'S'
            s++
        }

        results.push(tmp.join(''))
    }
    return results
}

module.exports = cyberReindeer