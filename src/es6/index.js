//---DEFAULT PARAMS Y CONCATENACION---CLASE 1
function newFunction(name, age, country){
    //establece valores por defecto por si no
    //trae uno por parametro
    var name = name || 'oscar'
    var age = age || 32
    var country = country || 'SV'

    console.log(name, age, country)
}

// ES6
function newFunction2(name = 'oscar', age = 32, country = 'SV'){
    console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', 23, 'SV')

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' '+world
console.log(epicPhrase)
// ES6
let epicPhrase2 = `${hello} ${world}`

//---LET Y CONST, MULTILINEA, SPREAD OPERATOR Y DESESTRUCTURACION--CLASE 2

let lorem = 'Hola mundo. Bienvenidos. Al curso de ecmascript+6 y mas cosas \n'
+ 'otra frase que se agrego de ultimo.'

//ES6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`
console.log(lorem)
console.log(lorem2)

//desestructuracion de elementos

let person = {
    'name' : 'oscar',
    'age': 23,
    'country': 'SV'
}

console.log(person.name, person.age)
//ES6
//Solo tomamos los elementos que necesitamos y se desestructura
let {name, age} = person

console.log(name, age)

//SPREAD OPERATOR

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yessica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)
//LET Y CONST

{
    var globalVar = 'global var'
}

{
    let globalLet = 'global Let'
    console.log(`let es solo accesible dentro del scope: ${globalLet}`)
}

console.log(globalVar)
//console.log(globalLet) Reference Error

const a = 'b'
//a = 'd' error, de asignacion a una constante
console.log(a)

//-----ARROW FUNCTIONS, PROMESAS Y PARAMETROS EN OBJETOS---CLASE 3
//parametros en obetos y asignacion
let name = 'oscar'
let age = 23
//ES5
obj = {name: name, age: age}
//ES6
obj2 = {name, age}
console.log(obj2)

//arrow functions
const names = [
    {name: 'oscar', age:32},
    {name: 'Yessica', age:27}
]

let listOfNames = names.map(function (item){
    console.log(item.name)
})
//arrow
let listOfNames2 = names.map( item => console.log(item.name)) 

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!')
        }else {
            reject('UPs!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))

//---CLASES, MODULOS Y GENERADORES

class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2,2))

// asi funciona en consola porque usa nodeJS
//y no usa sintaxis ES6. 
//(module.export = hello) luego ->
/*const hello = require('./module').default
console.log(hello())*/
//Asi funcionaria en el browser ya que
import { hello } from './module';
hello()

//Generadores
//funcion generadora primero retorna hello y en la proxima llamado world 
function*helloWorld(){
    if(true){
        yield 'Hello, '//aqui retorna y el punto de ejecucion se guarda aqui
        // al siguiente llamado con .next() continua hacia abajo
    }
    if(true){
        yield 'World'
    }

}
// mas info: https://latteandcode.medium.com/javascript-todo-lo-que-necesitas-saber-sobre-generadores-5f2a6d42afc4
const generatorHello = helloWorld()
console.log(generatorHello.next().value)// output: hello
console.log(generatorHello.next().value)// output: world
console.log(generatorHello.next().value)// output: undefined



