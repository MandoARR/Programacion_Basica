caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"] 

let knigths = caballeros.filter(element => element.includes("i"))
knigths = knigths.join("")

console.log(knigths.length)
