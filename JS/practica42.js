<<<<<<< Updated upstream
//EJERCICIO REDUCE()
//Imprime el producto con el precio más caro
=======
//Calcula la suma total de los precios de los productos
>>>>>>> Stashed changes
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
];

// Usamos reduce para obtener el producto con el precio más alto
// Cambiar izq = acc(acumulador) der = producto u otro nombre para hacerlo mas legible
const expensive = productos.reduce((acc, producto) => {
    if (acc.precio > producto.precio) {
        return acc;
    }
    else{
        return producto;
    }
},{});

console.log(expensive);
