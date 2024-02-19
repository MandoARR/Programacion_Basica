//EJERCICIO MAP()
// Encuentra la cantidad de veces que aparece cada palabra
const oracion = "Cuando cuentes cuentos cuenta cuantos cuentos cuentas";
const oracionSeparada = oracion.split(" ")
const frecuencia = {}

oracionSeparada.map(element => {
    const palabraMay = element.toUpperCase()    
    
    if (frecuencia[palabraMay]) {
        frecuencia[palabraMay] ++
    }
    else{
        frecuencia[palabraMay] = 1 
    }
})
console.log(frecuencia);


