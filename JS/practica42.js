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
        return producto;
},{});

console.log("El producto más caro es:", expensive.nombre, " - $", expensive.precio);
