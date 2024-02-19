//EJERCICIO REDUCE()
//Calcula la suma total de los precios de los productos
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
];

const sum = productos.reduce((acc,producto) => acc + producto.precio,0)

console.log(sum)