//Object entries

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)//devuelve una matriz
console.log(entries.length)

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'Ana'
}

const values = Object.values(data)
console.log(values) //devuelve un arreglo de strings
console.log(values.length) //devuelve cantidad de elemntos

const str = 'hello'
console.log(str.padStart(7,'hi'))
//1er param cantidad de letras str + agregadas
//2do param 'Letras a agregar al inicio de la palabra'
console.log(str.padEnd(11,' -----'))
console.log('food'.padEnd(11, '  -----'))

const obj = {
    name: 'oscar', //se pone una coma solo por si se agrega
    //un elemento despues sin caer en el error
}
//---Async Await---
const helloworld = () =>{
    return new Promise((resolve,reject) =>{
        (false)
            ?setTimeout(()=> resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () =>{
    const hello = await helloworld()
    console.log(hello)
}

helloAsync()

const anotherFunction = async () =>{
    try{
        const hello = await helloworld()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}

anotherFunction()