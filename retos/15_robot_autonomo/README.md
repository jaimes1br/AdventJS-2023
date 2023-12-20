# Reto #15: Robot autónomo

## Medio 🟠

Estamos programando unos **robots** llamados *giftbot* 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

Estamos creando una función a la que le pasamos: el *almacén* 🏬 que deben navegar y los *movimientos* ↔ que pueden realizar.

El almacén se representa como un **array de cadenas de texto**, donde:

* **`.` significa que hay vía libre.**
* **`*` significa que hay un obstáculo.**
* **`!` es la posición inicial del robot.**

Los movimientos son un **array de cadenas de texto**, donde:

* **`R` mueve al robot una posición a la derecha.**
* **`L` mueve al robot una posición a la izquierda.**
* **`U` mueve al robot una posición hacia arriba.**
* **`D` mueve al robot una posición hacia abajo.**

Hay que tener en cuenta que **el robot no puede superar los obstáculos ni los límites del almacén.**

Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

```javascript
const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.
```

Ten en cuenta que la `store` es **un array que puede ser de un número de filas que va de 1 a 100**, ya que tenemos almacenes de todos los tamaños.

También que el robot **es posible que termine en su posición inicial** si no puede moverse o si está dando vueltas.

## Solución propuesta

```javascript
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
```

---

### Puntos conseguidos: 60

* 1883 ops/s
* **Complejidad cognitiva:** 16