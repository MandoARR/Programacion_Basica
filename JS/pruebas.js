const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url) 
.then((response) => response.json()) 
.then((data) => { 
console.log(data); 
});

