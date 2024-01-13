let arreglo = [1,5,9,7,1,2,3,5,10,100,8]

for(let x = arreglo.length-1; x>0; x--)
{
    console.log(x)
    for(let y=x-1; y>0; y--)
    {
        if(arreglo[x] < arreglo[y])
        {
            let aux = []
            aux = arreglo[y]
            arreglo[y] = arreglo[x]
            arreglo[x] = aux 
        }
    }
}
console.log(arreglo)