//Definir 2 numeros este metodo tiene el problema que en la  el metodo "suma" lo considera en texto y no numero
/*let num1 = process.argv[2]
let num2 = process.argv[3]
*/
//
let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[3])


//operaciones Basicas
//+
let suma = num1 + num2

//-
let resta = num1 - num2

// /
let division = num1 / num2

// *
let multiplicacion = num1 * num2

//Imprimir todos los resultados

/*
console.log("Resultado de SUMA 4+2: ",suma)
console.log("Resultado de RESTA 4-2: ",resta)
console.log("Resultado de DIVISION 4/2: ",division)
console.log("Resultado de MULTIPLICACION 4*2: ",multiplicacion)
*/

console.log("Resultado de SUMA ", num1,"+",num2, "=",suma)
console.log("Resultado de RESTA ", num1,"+",num2, "=",resta)
console.log("Resultado de DIVISION ", num1,"+",num2, "=",division)
console.log("Resultado de MULTIPLICACION ", num1,"+",num2, "=",multiplicacion)
