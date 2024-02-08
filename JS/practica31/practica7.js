//Cambia los primero 3 elementos y ponlos al final
caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"] 

firstKnigths = caballeros.slice(0,3)
caballeros.shift()
caballeros.shift()
caballeros.shift()

caballeros = caballeros.concat(firstKnigths) 
console.log(caballeros)

