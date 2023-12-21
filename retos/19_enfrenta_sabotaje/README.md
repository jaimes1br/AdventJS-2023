# Reto #19: Enfrenta el sabotaje

## Medio 🟠

¡Alerta en la fábrica de juguetes de Santa! El **Grinch** 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

**Los elfos necesitan ayuda para encontrar los juguetes saboteados** y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los `*` representan los *juguetes saboteados* y las celdas vacías con un espacio en blanco ` ` son *los lugares seguros*.

Tu tarea es escribir **una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes**.

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .


```javascript
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
```

Ten en cuenta que…

* **Las celdas diagonales también se consideran adyacentes.**
* **El tablero siempre tendrá al menos una celda vacía y un juguete saboteado `*`.**
* **El tablero puede tener cualquier tamaño.**
* **Los números son cadenas de texto.**


## Solución propuesta

```javascript
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
```

---

### Puntos conseguidos: 25

* 575 ops/s
* **Complejidad cognitiva:** 12