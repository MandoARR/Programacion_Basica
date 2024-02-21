//EJERCICIO MAP()
// Encuentra el total de alumnos de cada profesor
const estudiantes = [
    { nombre: "Luis", profesor: "Profe 1", calificacion: 80 },
    { nombre: "Laura", profesor: "Profe 1", calificacion: 95 },
    { nombre: "Carlos", profesor: "Profe 2", calificacion: 70 },
    { nombre: "María", profesor: "Profe 2", calificacion: 85 },
    { nombre: "Pedro", profesor: "Profe 2", calificacion: 90 },
    { nombre: "Ana", profesor: "Profe 2", calificacion: 75 },
    { nombre: "Juan", profesor: "Profe 3", calificacion: 88 },
    { nombre: "Sofía", profesor: "Profe 4", calificacion: 92 }
];

const frecuencia = {};

estudiantes.forEach(element => {
    const teacher = element.profesor;
    const puntuacion = element.calificacion;
    
    if (frecuencia[teacher]){
        frecuencia[teacher] += puntuacion;
    } else{
        frecuencia[teacher] = puntuacion;
    }
});

console.log(frecuencia);
console.log(len);



