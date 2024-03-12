//Dame el total de las letras de todos los elementos de las palabras que tengan una “i” (Mayúsucla o minúscula)
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

const knigths = caballeros.filter(knigth => knigth.includes("i") || knigth.includes("I"))

let total = 0
let total2 = 0

knigths.forEach(knigth => {
    total += knigth.length
})

for (let index = 0; index < knigths.length; index++) {
    total2 += knigths[index].length;
    
}


console.log(total)
console.log(total2)