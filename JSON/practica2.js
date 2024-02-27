//Crea un método para ordenar los pokemones por nombre e imprimirlos y ejécutalo

const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url) 
.then((response) => response.json()) 
.then((data) => { 
orderPokemon(data.results)
})

function orderPokemon(pokemons){
    pokemons.sort((a,b) => a.name.localeCompare(b.name)) //localeCompare hace una comparacion con Strings
    pokemons.forEach(element => {
        console.log(element.name)
    });
}
