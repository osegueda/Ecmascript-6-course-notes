const obj = {
    name: 'moises',
    age: 23,
    country: 'SV',
}

let { country, name, ...all} = obj
// lo que hacemos aqui es poder desestructurar el objeto
//lo que va antes de la coma es lo que separamos
// y en all queda un nuevo objeto
console.log(all)

//spread operator, copia y desplega las propiedades
//de un objeto dentro de otro y si nosotros escribimos despues 
//de eso una misma prop pisa la del objeto

const obj = {
    name: 'oscar',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'SV'
}

console.log(obj1)

//PROMISE.Finaly

const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(cerror))
    .finally(() => console.log('Finalizo'))

    //REGEX
    //año,mes,dia
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20')
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year, month, day)