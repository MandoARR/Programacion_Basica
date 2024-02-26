const url = "https://pokeapi.co/api/v2/pokemon/"; // Endpoint
fetch(url) // va a regresar una promesa
.then((response) => response.json()) // Convertir a Json, regresa promesa
.then((data) => { // Resolviendo la promesa de json()
console.log(data); // Imprime los datos convertidos
});

