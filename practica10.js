/*elabora un programa que determine el grupo de edad al que pertenece una persona a partir
de su edad

Bebe -> 0-2
Niñ@ -> 3 - 10
Adolecente -> 11 17
Adulto Joven -> 18 40
Adulto en Crisis -> 41 60
Adulto Mayor -> 61 ------>
*/

let num = parseInt(process.argv[2])

if(num == 0 || num < 3)
{
    console.log("Bebe")
} 
else if(num >= 3 && num <= 10)
{
    console.log("Niñ@")
}
else if(num >= 11 && num <= 17)
{
    console.log("Adolecente")
}
else if(num >= 18 && num <= 40)
{
    console.log("Adulto Joven")
}
else if(num >= 41 && num <= 60)
{
    console.log("Adulto en Crisis")
}
else if(num >= 61)
{
    console.log("Adulto Mayor")
}
else
{
    console.log("::::NO ESCRIBISTE UN NUMERO::::")
}