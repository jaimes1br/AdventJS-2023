console.log(compile('++*-')) //3
console.log(compile('++%++<')) //6
console.log(compile('++<--')) // 0 
console.log(compile('++¿+?')) // 3
console.log(compile('--¿+++?')) // -2
console.log(compile('++¿+?+')) // 4
console.log(compile('-+¿+?')) // 0

/**
 * 
 * @param {string} code Instructions 
 * @returns {Number} Result following the instructions
 */
function compile(code) {
    
    let normal = true
    let acc = 0

    while(code.includes('<')){
        if(code.includes('%')){
            const from = code.indexOf('%') + 1
            const to = code.indexOf('<')
            const base = code.slice(from,to)
            code = code.replace('%','',from-1)
            code = code.replace('<',base,to)
        }else{
            code = code.replaceAll('<','')
        }
    }

    for(const e of code){
        if(e === '¿'){
            normal = acc > 0
        }else if(e === '?'){
            normal = true
        }else if(normal){
            if(e === '+'){
                acc++
            }else if(e === '*'){
                acc *= 2
            }else if(e === '-'){
                acc--
            }
        }
    }    
    return acc
}

module.exports = compile