# Reto #11: Los elfos estudiosos

## Medio 🟠

En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

**Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.** Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función `getIndexsForPalindrome` que reciba una cadena de caracteres y devolverá:

* **Si ya es un palíndromo, un array vacío.**
* **Si no es posible, null.**
* **Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.**

Por ejemplo:

```javascript
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```

Si se puede formar el palíndromo con diferentes intercambios, **siempre se debe devolver el primero que se encuentre.**


## Solución propuesta

```javascript
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
```

---

### Puntos conseguidos: 30

* 446 ops/s
* **Complejidad cognitiva:** 5
