# Reto #21: Mensaje binario

## Medio 🟠

Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. ¿Los extraterrestres están tratando de comunicarse con ellos? 👽

**El mensaje que llega es un array de 0s y 1s**. Parece que han encontrado un patrón… Para asegurarse, quieren **encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.**
```javascript
findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1])
// no hay segmentos equilibrados: []
```

Ten en cuenta que si hay más de un patrón equilibrado, **debes devolver el más largo y el primero que encuentres de izquierda a derecha.**

Dicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀. Parece ser que tienen que enviarlos a https://mars.codes.

## Solución propuesta

```javascript
function findBalancedSegment(message) {
    let r = []

    for (let i = 0; i < message.length - 1; i++) {
        let zeros = 0, ones = 0;
        for (let j = i; j < message.length; j++) {
            message[j] ? ones++ : zeros++
            if(ones === zeros) r.push([i,j])
        }
    }

    let t = r.map(s => s[1] - s[0])
    let i = t.indexOf(Math.max(...t))
    return r[i] ?? []   
}
```

---

### Puntos conseguidos: 100

* 1823 ops/s
* **Complejidad cognitiva:** 7