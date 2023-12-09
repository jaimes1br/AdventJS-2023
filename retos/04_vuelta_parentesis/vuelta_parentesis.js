// console.log(decode('hola (odnum)'))
/**
 * Returns us a decoded message based on the encoded one
 * 
 * @param {string} message Coded message
 * @returns {string} Decoded message
 */
function decode(message) {
    const r = /\(([^()]+)\)/;
    let match = message.match(r);
    
    while (match) {
      const reversed = match[1].split("").reverse().join("");
      message = message.replace(match[0], reversed);
      match = message.match(r);
    }

    return message;
}

module.exports = decode

// Exceso de llamadas en pagina
// function decode(message) {

//     const flipWord = (w) => {
//         console.log(w);
//         if(w.includes('(')){
//             console.log(w);
//             const limit = w.indexOf('(')
//             const endLimit = w.lastIndexOf(')')
//             let temp = w.substring(limit+1,endLimit)
//             let nw = flipWord(temp.split('').reverse().join(''))
//             let newWord = w.substring(0,limit) + nw + w.substring(endLimit)
//             newWord = newWord.split(')').join("")
//             return flipWord(newWord)
//         }
        
//         return w    
//     }
 
//     return message.split(" ").map(word => flipWord(word)).join(" ") 
// }

//No regresar la ejecución de la funcion
// function decode(message){

//     const tmp = message.match(/\(([^()]+)\)/)
//     if(!tmp) return message
 
//     const nw = tmp[0].slice(1,-1).split('').reverse().join('')
//     const fw = message.replace(tmp[0],nw)

//     return decode(fw)
// }
