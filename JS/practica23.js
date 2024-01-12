//Como sería una funcion que ordene un arreglo
let arreglo1 = [50,39,78,100,55,36,17]
let arreglo2 = [100,50,-1]


function ordenaArreglos(arreglo)
{
    for(x=0; x<arreglo.length; x++)
    {
        for(y=x+1; y < arreglo.length; y++)
        {
            if(arreglo[x] > arreglo[y])
            {
                let aux = []
                aux = arreglo[y]
                arreglo[y] = arreglo[x]
                arreglo[x] = aux 
            }
        }
    }
    return arreglo
}

console.log(arreglo1)
ordenaArreglos(arreglo1)
console.log(arreglo1)

console.log(arreglo2)
ordenaArreglos(arreglo2)
console.log(arreglo2)