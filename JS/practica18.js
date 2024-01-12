//Muestra la edad mas grande de los valores del siguiente arreglo
let edades = [15,20,13,45,25,27,32,38]
let mayor = -1 // se le asigna -1 porque nade tiene una edad negativa

for(i=0;i<edades.length;i++) //i = "indice"
{
    if(mayor < edades[i]){mayor = edades[i]}
}

console.log("La edad mayor es: " + mayor)