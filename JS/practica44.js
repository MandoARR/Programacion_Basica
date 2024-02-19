//EJERCICIO SET()
//Encuentra los elementos comunes entre dos arreglos utilizando un Set y el método filter().
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [3, 4, 5, 6, 7];

const newArray2 = new Set(arreglo2)

const arrayUnique = arreglo1.filter(element => newArray2.has(element))

console.log(arrayUnique)