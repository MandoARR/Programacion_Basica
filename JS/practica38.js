//Dame las palabras con más coincidencias en el length
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

big_knigth = [""]

caballeros.forEach(caballero => {
    if(big_knigth.length < caballero.length){
        big_knigth = caballero
    }
 });

 console.log(big_knigth.length)