
//Intenten imprimir la respuesta del fetch(url) (¿Comprensible?).
const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url) 
.then((response) => console.log(response)) 
.then((data) => { 
console.log(data); 
});

