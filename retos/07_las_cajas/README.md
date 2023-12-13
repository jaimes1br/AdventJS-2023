# Reto #7: Las cajas en 3D

## Fácil 🟢

Santa está experimentando con nuevos diseños de regalos y **necesita tu ayuda para visualizarlos en 3D**.

Tu tarea es escribir una función que, dado un tamaño n (entero), **genere un dibujo de un regalo en 3D** utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con `#` y las caras con el símbolo que nos pasan como parámetro:

```javascript
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

Importante: Nos han dicho que **siempre hay que dejar un salto de línea al final del dibujo.**

**Nota**: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter `"`.

## Solución propuesta

```javascript
function drawGift(size, symbol) {
    if(size === 1) return '#\n'

    const base = size - 2
    const top = `${'#'.repeat(size)}\n`
    const medio = `${'#'.repeat(size)}${symbol.repeat(base)}#\n`
    
    let arriba = ''
    let abajo = []
    for (let i = 0; i < base; i++) {
        const temp = `#${symbol.repeat(base)}#${symbol.repeat(i)}#`
        arriba += `${' '.repeat(base - i)}${temp}\n`
        abajo[base - i - 1] = temp + '\n' 
    }
    
    return ' '.repeat(size - 1) +  top + arriba + medio + abajo.join('') + top
}
```

---

### Puntos conseguidos: 270

* 2398 ops/s
* **Complejidad cognitiva:** 3
