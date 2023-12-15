// console.log(checkIsValidCopy('Santa Claus is coming','sa#ta Cl#us i+ comin#')) // true
// console.log(checkIsValidCopy('s#nta Cla#s is coming','p#nt: cla#s #s c+min#')) // false (por la p inicial)
// console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s'))   // true

// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'));  // false (hay un # donde no debería
// console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')) //true
// console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')) //false

/**
 * 
 * @param {string} original Original letter
 * @param {string} copy Copied letter
 * @returns {Boolean} If the copied letter is a valid copy
 */

function checkIsValidCopy(original, copy) {
    
    const validChars = ['#','+',':','.',' ']

    for(i = 0; i < original.length ; i++){
        const og = original[i]
        const copia = copy[i]

        const tr = !(/[a-zA-Z]/).test(og)
        const fo = og === copia

        if(tr && og === ' ' && !fo) return false 
        
        if(validChars.includes(og) && validChars.includes(copia)){
            const o = validChars.indexOf(og)
            const c = validChars.indexOf(copia)
            if(o > c) return false
        }
        
        const fi = !fo && copia === og.toLowerCase()
        const se = !fo && validChars.includes(copia)

        if(!(fi || se || fo)) return false
    }

    return true
}

module.exports = checkIsValidCopy