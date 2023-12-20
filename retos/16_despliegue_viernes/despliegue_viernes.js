// console.log(transformTree([3, 1, 0, 8, 12, null, 1]))
// console.log(transformTree([3, 1, 0]))
console.log(transformTree([]))

// [0, 1, 2, 3, 4, 5, 6]

//        3           n = 0; d: 2(0) + 2 = 2  y i: 2(0) + 1 = 1 
//      /   \
//     1     0        n = 1; d: 2(1) + 2 = 4 y i: 2(1) + 1 = 3 
//    / \     \
//   8  12     1      n = 2; d: 2(2) + 2 = 6 y i: 2(2) + 1 = 5

function transformTree(tree) {
    if(!tree.length) return null

    let root = [{
        value: tree[0],
        left: null,
        right: null
    }]
    
    let level = 1 

    for (let i = 1; i < tree.length; i++) {
        let base = null

        if(tree[i] !== null){
            const pIndex = level - Math.trunc(level/2) - 1
            const padreTree = root[pIndex]
            const opc = i % 2 === 0 ? 'right' : 'left' 

            base = {
                value: tree[i],
                left: null,
                right: null
            }

            if(padreTree) padreTree[opc] = base 
        }   

        root.push(base)
        level++
    }

    return root[0]
}

module.exports = transformTree 