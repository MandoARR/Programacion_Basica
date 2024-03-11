//Cambia los primero 3 elementos y ponlos al final
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

let knigths1 = caballeros.slice(0,3)
let knigths2 = caballeros.slice(3,7)

let knigths = knigths2.push(...knigths1) 

//console.log(knigths1)
//console.log(knigths2)
console.log(knigths)
