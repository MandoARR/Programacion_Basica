//Condicionales

let usuario = process.argv[2]
let pass = process.argv[3]

//usuario "armando@tiendita.com"
//pwd "tostachos"

if(usuario == "armando@tiendita.com" && pass=="tostachos")
{
    console.log("----USUARIO VALIDO----")
    console.log("::: BIENVENIDO SIUUUU !!!:::")
}
else
{
    console.log(":::USUARIO NO VALIDO:::")
}