//Leer un número desde los argumentos
let numero = parseInt(Process.argv[2])

//Tabla de multiplicar del 1 al 10
for(let i=1; i<=10; i++)
{
    console.log(numero + " X " + i + " = " + (numero * i))
}