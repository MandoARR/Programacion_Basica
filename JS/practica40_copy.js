const alumnos = ["Juarez Valeria", "Carranza Carlos", "Diana Barajas", "Ruben Orozco", "Gama Oliver", "Garcia Santiago", "Vargas David", "Hernandez Emma", "Mendiola Mara", "Maestro Julian"]

alumnos.sort()
let numeroLista=1
alumnos.forEach(element => {
    console.log(numeroLista+"-"+element)
    numeroLista++;
});