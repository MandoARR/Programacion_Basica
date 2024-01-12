//Escribir un programa que me ordene cualquier numerico de menor a mayor
//let arreglo = [50,39,78,100,55,36,17]
let arreglo = [1,5,9,7,1,2,3,5,10,100,8]

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
console.log(arreglo)