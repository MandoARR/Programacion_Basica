//Dame el total de las letras de todos los elementos de las palabras que tengan una “i” (Mayúsucla o minúscula)
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

const knigths = caballeros.filter(knigth => knigth.includes("i") || knigth.includes("I"))

console.log(knigths)