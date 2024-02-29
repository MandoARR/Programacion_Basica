//El fetch ponlo en una función y mándalo llamar.
const url = "https://pokeapi.co/api/v2/pokemon/";

function pokeApi(){
     fetch(url).then((response) => response.json()).then(data => {
        orderPokemon(data.results)
        console.log(data)
    }) 
}

function orderPokemon(data){
    data.sort((a,b) => a.name.localeCompare(b.name))
}

pokeApi();