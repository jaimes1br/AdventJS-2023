
// console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// console.log(adjustLights(['🔴', '🔴', '🔴']))

function adjustLights(lights) {
    function numChanges(lights){
        let s = lights[0] === '🟢' ? '🔴' : '🟢'   
        let cambios = 0

        for (let i = 1; i < lights.length ; i++) {
            if(s !== lights[i]) cambios++
            s = s === '🟢' ? '🔴' : '🟢'
        }

        return cambios
    }

    return Math.min(numChanges(lights),numChanges(lights.reverse()))
}

module.exports = adjustLights