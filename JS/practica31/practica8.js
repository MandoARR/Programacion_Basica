//Dame las palabras con más coincidencias en el length
caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"] 

let Bigknigth = []
caballeros.forEach(element => {
    if (Bigknigth.length < element.length){
        Bigknigth = element
    }
})

console.log(Bigknigth.length)