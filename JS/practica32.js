//Contar el total de las letras de todos los elementos
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]
 
const knigths = caballeros.map(knigth => knigth.length)
let total = 0
knigths.forEach(knigth => total += knigth)


//Nuevo ejemplo con reduce
const sum = knigths.reduce((knigth_acc, knigth) => knigth_acc + knigth ,0)

console.log(total)
console.log(sum)

