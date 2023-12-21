// console.log(drawClock('01:30'))// ⬇️

/**
 * 
 * @param {string} time Represts the time to draw
 * @returns {Array[Array[string]]} Clock drawn
 */
function drawClock(time) {
    
    const num = {
        '0': ['***','* *','* *','* *','* *','* *','***'],
        '1': ['  *','  *','  *','  *','  *','  *','  *'],
        '2': ['***','  *','  *','***','*  ','*  ','***'],
        '3': ['***','  *','  *','***','  *','  *','***'],
        '4': ['* *','* *','* *','***','  *','  *','  *'],
        '5': ['***','*  ','*  ','***','  *','  *','***'],
        '6': ['***','*  ','*  ','***','* *','* *','***'],
        '7': ['***','  *','  *','  *','  *','  *','  *'],
        '8': ['***','* *','* *','***','* *','* *','***'],
        '9': ['***','* *','* *','***','  *','  *','***'], 
        ':': [' ',' ','*',' ','*',' ',' '],
    }

    const r = []

    const n1 = num[time[0]]
    const n2 = num[time[1]]
    const c  = num[':']
    const n3 = num[time[3]]
    const n4 = num[time[4]]

    for (let i = 0; i < 7; i++) {
        const tmp = `${n1[i]} ${n2[i]} ${c[i]} ${n3[i]} ${n4[i]}`
        r.push([...tmp])
    } 

    return r
}

module.exports = drawClock