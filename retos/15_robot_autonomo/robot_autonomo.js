const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
// console.log(autonomousDrive(store, movements)) 
/*
[
  ".......",
  "...*!*."
]
*/

/**
 * 
 * @param {Array[string]} store Represents the aisles of the warehouse
 * @param {Array[string]} movements List of moves
 * @returns {Array[string]} Status of the warehouse after the movements 
 */
function autonomousDrive(store, movements) {
    
    const maxRow = store.length
    const maxCol = store[0].length
    
    let row = store.findIndex(line => line.includes('!'))
    let col = store[row].indexOf('!')
    let newStore = store.map(row => row.split(''))
    
    const makeMove = (nr,nc) => {
        if(nr >= maxRow || nc >= maxCol) return 

        if( newStore[nr][nc] !== '*'){
            newStore[row][col] = '.';
            newStore[nr][nc] = '!';
            [row,col]=[nr,nc]
        }
    } 

    const moves = {
        R: (r,c) => makeMove(r,c+1), 
        L: (r,c) => makeMove(r,c-1),
        D: (r,c) => makeMove(r+1,c),
        U: (r,c) => makeMove(r-1,c)
    }

    for (const move of movements) {
        moves[move].apply(null,[row,col])
    }

    return newStore.map(row => row.join(''))
}

module.exports = autonomousDrive