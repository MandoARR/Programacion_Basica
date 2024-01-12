//Practica 4 pero a partir de un argumento al ejecutar el comando

//Determina si un numero es par o impar
//2 4 6 8 10 pares / 2 = residuo == 0
let num = parseInt(process.argv[2])
let residuo = num % 2

//SI HAY RESIDUO
if(residuo == 0)
{
    console.log("PAR")
} else 
{
    console.log("ES IMAPR")
}


/*
1
2
3
4 console.log("ES PAR")
5
6 console.log("ES IMPAR")
7
8
9
10
*/