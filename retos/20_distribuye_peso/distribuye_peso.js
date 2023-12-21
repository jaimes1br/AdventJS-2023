const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]  
//   [5, 3, 3],
//   [6, 5, 3],
//   [7, 6, 4] 

console.log(distributeGifts(input))

function distributeGifts(weights) {

    const result = []

    for(let f = 0; f < weights.length; f++){
        let line = []
        for (let c = 0; c < weights[f].length; c++) {
            let opcs = [
                [f-1,c],
                [f+1,c],
                [f,c],
                [f,c-1],
                [f,c+1],
            ]
            
            const [total,nums] = opcs.reduce((acc,[vf,vc]) => {
                let fc = vf >= 0 && vf < weights.length 
                let sc = vc >= 0 && vc < weights[f].length
                if( fc && sc && weights[vf][vc]){
                    return [
                        acc[0] += weights[vf][vc],
                        acc[1] += 1 
                    ]
                }
                return acc
            },[0,0])
            
            line.push(Math.round(total/nums))
        }
        result.push(line)
    }
    
    return result
}

module.exports = distributeGifts