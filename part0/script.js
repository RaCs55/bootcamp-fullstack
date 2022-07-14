const list = []
const anotherList = list.concat(157)


const persona = {
    nombre: 'Raúl',
    age: 15,
    numeros: [1, 2]
}

console.log(persona.nombre)
console.log(persona.numeros[0])

const field = 'age'

console.log(persona[field])

const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b 
}


console.log(sumar("s", "a"))