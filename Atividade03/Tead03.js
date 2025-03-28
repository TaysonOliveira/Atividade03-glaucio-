let nomes = ["Tayson","Jessica","Carlos","Lucivania","Renata"];
console.log(nomes[2]);

nomes.push("Carla");
nomes.unshift    ("João");
nomes.pop();
console.log("Array atualizado: ", nomes);

let valores = [2,4,6,8];
let valorDobrado = valores.map(valor => valor * 2);
console.log("Valores dobrados: ", valorDobrado);

let numeros = [1,3,5,7,9];
let maioresQueCinco = numeros.filter(num => num > 5);
console.log("Numeros maiores que 5: ", maioresQueCinco);
