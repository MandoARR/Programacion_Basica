const array = [
    {
      nombre: "Juan",
      edad: 30,
      activo: true,
      intereses: ["programacion", "viajes", "lectura"],
      direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Ciudad Principal"
      }
    },
    {
      nombre: "María",
      edad: 25,
      activo: false,
      intereses: ["música", "deportes", "arte"],
      direccion: {
        calle: "Avenida Central",
        numero: 456,
        ciudad: "Ciudad Secundaria"
      }
    },
    {
      nombre: "Pedro",
      edad: 35,
      activo: true,
      intereses: ["fotografía", "naturaleza", "cocina"],
      direccion: {
        calle: "Calle de los Arboles",
        numero: 789,
        ciudad: "Ciudad Terciaria"
      }
    },
    {
      nombre: "Ana",
      edad: 28,
      activo: true,
      intereses: ["teatro", "moda", "viajes"],
      direccion: {
        calle: "Avenida de las Flores",
        numero: 1011,
        ciudad: "Ciudad Cuarta"
      }
    },
    {
      nombre: "Luis",
      edad: 40,
      activo: false,
      intereses: ["ciencia", "historia", "tecnología"],
      direccion: {
        calle: "Avenida del Saber",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
    {
      nombre: "Teresa",
      edad: 15,
      activo: false,
      intereses: ["historia", "natacion", "tecnología"],
      direccion: {
        calle: "Avenida del Conocimiento",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
  ];

//2 arreglos, uno de todos los ele

let arrayAvenida = array.filter(element => element.direccion.calle.includes('Avenida'))
let arrayCalle = array.filter(element => element.direccion.calle.includes('Calle'))

console.log(arrayAvenida)
console.log(arrayCalle)