<<<<<<< Updated upstream
//EJERCICIO SET()
//Encuentra los elementos comunes entre dos arreglos utilizando un Set y el método filter().
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [3, 4, 5, 6, 7];

const newArray2 = new Set(arreglo2)

const arrayUnique = arreglo1.filter(element => newArray2.has(element))

console.log(arrayUnique)
=======
//Calcula la suma total de los precios de los productos
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
];


const expensive = productos.reduce((acc, producto) => {
    if (acc.precio > producto.precio) {
        return acc;
    }
        return producto;
},{});

console.log("El producto más caro es:", expensive.nombre, " - $", expensive.precio);
>>>>>>> Stashed changes
