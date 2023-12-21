const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]
// const store = [
//     ['*', ' '],
//     [' ', ' ']
// ]

/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

// [
//     ['0,0', '0,1', '0,2', '0,3'],
//     ['1,0', '1,1', '1,2', '1,3'],
//     ['2,0', '2,1', '2,2 ', '2,3'],
//     ['3,0', '3,1', '3,2', '3,3']
// ]
// const store = [
//     ['*', ' ', '*']
//   ]
  
// console.log(revealSabotage(store))

function revealSabotage(store) {
    const lf = store.length
    const lc = store[0].length
    let result = []

    const opcs = (f,c) => {
        let values = [
            [f-1,c-1],
            [f-1,c],
            [f-1,c+1],
            [f,c-1],
            [f,c+1],
            [f+1,c-1],
            [f+1,c],
            [f+1,c+1],
        ]
        return values.filter(v => 
                (v[0] >= 0 && v[0] < lf) && (v[1] >= 0 && v[1] < lc)
            )
    }    

    for(let i = 0; i < store.length; i++ ){
        let temp = []
        for (let j = 0; j < store[i].length; j++) {
            if(store[i][j] !== '*'){
                const values = opcs(i,j)                
                let num = 0
                for (const [f,c] of values) {
                    if(store[f][c] === '*') num++
                }

                temp.push(num > 0 ? `${num}` : ' ')
            }else{
                temp.push('*')
            }
        }
        result.push(temp)
    }

    return result
}

module.exports = revealSabotage