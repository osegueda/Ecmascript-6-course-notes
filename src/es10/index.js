//ARRAY.FLAT (NO ME FUNCIONO)
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))


let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));
/*--Array.prototype.flat(nivel_de_profundidad): 
un nuevo método que nos permite aplanar arreglos.
--Array.prototype.flatMap() 
lo mismo que flat con el beneficio de que primero 
manipular la data para luego poder aplanar.*/ 

let hello = '          hello world'
console.log(hello)
console.log(hello.trimStart())

let hello = 'hello world      .'
console.log(hello)
console.log(hello.trimEnd())

try{

}catch{
    error//ya no es necesario pasar error como parametro
    //se accede desde el scope
}

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));//lo convierte a un objeto

let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);//output: My symbol

