// Crea un método que reciba el nombre de un pokemon y traiga sus datos.
const url = "https://pokeapi.co/api/v2/pokemon/6"; 
fetch(url) 
.then((response) => response.json()) 
.then((data) => { 
console.log(data)
})

