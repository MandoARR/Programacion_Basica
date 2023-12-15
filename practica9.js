/*Escribir un programa que a partir de un numero proporcionado por el
usuario, determine si es numero positivo o negativo*/

let num = parseInt(process.argv[2])

if(num < 0)
{
    console.log("NUMERO NEGATIVO")
} 
else if(num > 0)
{
    console.log("NUMERO POSITIVO")
}
else if(num == 0)
{
    console.log("ESCRIBISTE 0")
}
else
{
    console.log("Que $%& escrbiste?")
}