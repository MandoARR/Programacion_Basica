//EJERCICIO SET()
// Encuentra los elementos únicos en un arreglo que no están presentes en otro 
// arreglo utilizando un Set y el método filter()
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [3, 4, 5, 6, 7];

const newArray1 = new Set(arreglo1)
const newArray2 = new Set(arreglo2)

const arrayUnique1 = arreglo1.filter(element => !newArray2.has(element))
const arrayUnique2 = arreglo2.filter(element => !newArray1.has(element))

const unique = arrayUnique1.concat(arrayUnique2)

console.log(arrayUnique1)
console.log(arrayUnique2)
console.log(unique)
