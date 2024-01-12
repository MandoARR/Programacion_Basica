function encuentraPivote(arreglo)
{
    let sumRigth = 0
    let sumLeft = 0

    for(let i=0; i<arreglo.length; i++)
    {
        sumRigth = 0
        for(let j=arreglo.length-1; j>0; j--)
        {
            sumRigth = sumRigth + arreglo[j]  
        }

        if(sumLeft == sumRigth)
        {
            return i
        }
        
        sumLeft = sumLeft + arreglo[i]
    }

    return -1
}

let arreglo1 = [1,7,3,6,5,6]
let arreglo2 = [1,2,3]
let arreglo3 = [2,1,-1]

let resultado1 = encuentraPivote(arreglo1)
let resultado2 = encuentraPivote(arreglo2)
let resultado3 = encuentraPivote(arreglo3)

console.log