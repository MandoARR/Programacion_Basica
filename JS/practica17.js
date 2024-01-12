//imprime cada valor del siguiente arreglo
let edades = [15,20,13,18,25,27,32,38]
let total = 0
//ciclo para imprimir cada valor

for(i=0;i<edades.length;i++) //i = "indice"
{
    console.log("Valor #" + i + " es: " + edades[i])
}

//Muestra la suma de los valores del arreglo pasado
for(i=0;i<edades.length;i++) //i = "indice"
{
    total = total+edades[i]
}

console.log("La suma de de los valores es: " + total)