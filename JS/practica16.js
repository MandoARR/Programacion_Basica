//Iteración en arreglos
let alumnos = ["Carlos", "Armando", "Jorge", "Daniel","Roberto", "Abraham"]

console.log("Contenido: ")
console.log(alumnos)
console.log("Tamaño: " + alumnos.length)

console.log("Primer elemento: " + alumnos[0])
console.log("Último elemento: " + alumnos[alumnos.length-1])

console.log("En este programa hay varios arreglos")
console.log(process.argv)

console.log("Otro arreglo en este programa tiene tamaño de: ")
console.log(alumnos[4].length)

//para i iniciando en 0 hasta el tamaño de nombre (i<6),
//incrementando en 1 el valor de i en cada iteracion
for(let i=0;i<alumnos.length;i++)
{
    console.log("El nombre " + alumnos[i] + " tiene " + alumnos[i].length + " letras")
}

