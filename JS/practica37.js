//El número de letras de la palabra más grande
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

big_knigth = [""]

caballeros.forEach(caballero => {
    if(big_knigth.length < caballero.length){
        big_knigth = caballero
    }
 });

 console.log(big_knigth.length)