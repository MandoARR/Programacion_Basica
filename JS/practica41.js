<<<<<<< Updated upstream
//EJERCICIO REDUCE()
=======
>>>>>>> Stashed changes
//Calcula la suma total de los precios de los productos
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
];

<<<<<<< Updated upstream
const sum = productos.reduce((acc,producto) => acc + producto.precio,0)

console.log(sum)
=======

const expensive = productos.reduce((acc, producto) => {
    if (acc.precio > producto.precio) {
        return acc;
    }
        return producto;
},{});

console.log("El producto más caro es:", expensive.nombre, " - $", expensive.precio);
>>>>>>> Stashed changes
