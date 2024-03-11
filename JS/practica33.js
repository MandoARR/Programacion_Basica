//Agregar ! al final de todos los elementos
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]
 
const knigths = caballeros.map(knigth => {
    knigth += "!"
    return knigth
})

console.log(knigths)

