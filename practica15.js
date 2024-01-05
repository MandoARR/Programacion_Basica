//Un programa donde le solicite al usuario N cantidad de numeros y debe de determinar cual de todos los numeros es el menor
// n [1,5] y los numeros todos son positivos 
let n = parseInt(process.argv[2])

if(n < 1 || n > 5)
{
    console.log("n esta fuera de rango")
    return;
}

let menor = Infinity
for(let i=3; i<=(n+2); i++)
{
    let numeroActual = parseInt(process.argv[i])
    if(menor > numeroActual)
    {
        menor = numeroActual
    }
}

console.log("El menor es " + menor)