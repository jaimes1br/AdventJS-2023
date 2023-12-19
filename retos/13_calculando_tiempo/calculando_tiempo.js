console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));// '-02:20:00'

// console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

// console.log(calculateTime([
//     '00:45:00',
//     '00:45:00',
//     '00:00:30',
//     '00:00:30'
//   ]));
// '-05:29:00'

/**
 * 
 * @param {Array[string]} deliveries Time each delivery takes       
 * @returns {String} Missing or excess time in deliveries
 */
function calculateTime(deliveries) {

    const max = 25200 //segundo para 07:00:00

    let d = deliveries.reduce((acc,t) => {
        let tmp = t.split(':')
        let sec = +tmp[0] * 3600 + (+tmp[1]) * 60 + (+tmp[2]) 
        return acc += sec
    },0)

    let diff = Math.abs(max - d)
    
    const h = Math.floor(diff / 3600)
    diff %= 3600
    const m = Math.floor(diff/60)
    const s = diff%60
    
    const times = [h,m,s].map(t => `${t}`.padStart(2,0)).join(':')
    return max > d ? `-${times}` : times
}

module.exports = calculateTime