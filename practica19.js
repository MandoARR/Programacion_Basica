//Escribir un programa que encuentre el indice pivote
//Un indice pivote es aquel que divide el arreglo (sin considerarse) en 2 sumas iguales
// [1,7,3,6,5,6] el indice pivote es 3 suma izq [1,7,3] = 11 y la suma derecha [5,6] = 11
// [1,2,3] el indice es -1 no hay indice pivote
// [2,1,-1] el indice pivote es 0  suma izq 0 ( no hay elementos ) suma derecha es [1,-1] = 0

//pista 1 : son varios ciclos
//pista 2 : los ciclos pueden ser uno dentro del otro
//pista 3 : necesitas llevar la suma izq y la derecha para poder compararlos
//pista 4 : utiliza return para terminar el programa

let arreglo = [1,7,3,6,5,6]
let sumIzq = 0
let sumDer = 0

for(let i=0; i<arreglo.length; i++)
{
    sumDer = 0
    
    for(let j=i+1; j<arreglo.length; j++)
    {
        sumDer = sumDer + arreglo[j]  
    }

    if(sumIzq == sumDer)
    {
        console.log(i);
        return;
    }

    sumIzq = sumIzq + arreglo[i]
}

console.log(-1)

/*
console.log(-1)

let arr = [1,7,3,6,5,6]
let sumLeft = 0
let sumRigth = 5

for(let i=0; i<arr.length; i++)
{
    for(let j=5; j<=0; j--)
    {
        if(sumIzq == sumDer)
        {
            console.log(i);
            return;
        }
        sumIzq = sumIzq + arreglo[i]    
    }
}



console.log(-1)

for(let i=0; i<arreglo.length; i++)
{
    sumDer = 0
    
    for(let j=arreglo.length-1; j>1; j--);
    {
        sumDer = sumDer + arreglo[j]  
    }

    if(sumIzq == sumDer)
    {
        console.log(i);
        return;
    }

    sumIzq = sumIzq + arreglo[i]
}

console.log(-1)

*/

