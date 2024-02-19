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

const sum = estudiantes.reduce((acc, puntuacion) => acc += puntuacion.calificacion,0)
console.log(sum/estudiantes.length);



