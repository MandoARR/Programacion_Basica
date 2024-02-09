let caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"];

let nombresConT = caballeros.filter(caballero => caballero[0] === "T");

caballeros = caballeros.filter(caballero => caballero[0] !== "T");

caballeros = nombresConT.concat(caballeros);
console.log(caballeros);


/*
Lista de alumnos donde ordenamos los nombres 
*/