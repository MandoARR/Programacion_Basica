const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url).then((response) => response.json()).then((data) => { 
     
});
// Define la función para ordenar los pokemones por nombre
function ordenarPokemonesPorNombre(pokemons) {
    // Ordena los pokemones alfabéticamente por nombre
    pokemons.sort((a, b) => a.name.localeCompare(b.name));
    // Imprime los nombres ordenados
    pokemons.forEach((pokemon) => {
        console.log(pokemon.name);
    });
}

// URL de la API de Pokémon
const url = "https://pokeapi.co/api/v2/pokemon/";

// Realiza la solicitud a la API
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Extrae los nombres de los pokemones
        const pokemons = data.results.map((pokemon) => {
            return { name: pokemon.name };
        });
        // Llama a la función para ordenar y imprimir los nombres
        ordenarPokemonesPorNombre(pokemons);
    });
