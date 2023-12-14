console.log(getIndexsForPalindrome('anna')) // []
// console.log(getIndexsForPalindrome('abab')) // [0, 1]
// console.log(getIndexsForPalindrome('abac')) // null
// console.log(getIndexsForPalindrome('aaaaaaaa')) // []
// console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
// console.log(getIndexsForPalindrome('caababa')) // null

/**
 * 
 * @param {string} word 
 * @returns {Array[number]} Indices if it is possible to create the palindrome, empty if it already is, and null if it is not possible.
 */
function getIndexsForPalindrome(word) {

    if(word === word.split('').reverse().join('')){
        return []
    } 

    let tmp = ''
  
    for(let i = 0; i < word.length; i++){
        for(let j = i; j < word.length; j++){
            tmp = word.split('');
            [tmp[i],tmp[j]] = [tmp[j],tmp[i]];
            tmp = tmp.join('')
            if(tmp === tmp.split('').reverse().join('')){
                return [i,j]
            }
        }   
    }

    return null
}

module.exports = getIndexsForPalindrome