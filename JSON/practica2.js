//Crea un método para ordenar los pokemones por nombre e imprimirlos y ejécutalo
const url = "https://pokeapi.co/api/v2/pokemon/"; 

function orderPokemonMap(data){
    const newArray = data.map(element => element.name)
    newArray.sort()
    console.log(newArray)
}

function orderPokemonFor(data){
    data.sort((a,b) => a.name.localeCompare(b.name)) //localeCompare sirve para hacer comparaciones con String
    data.forEach(element => {
        const names = element.name
        console.log(names)    
    });
}

fetch(url) 
.then((response) => response.json()) 
.then((data) => { 
    orderPokemonFor(data.results);
    orderPokemonMap(data.results) 
});