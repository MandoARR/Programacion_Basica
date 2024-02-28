//¿Qué pasa si ejecutas un console.log después del método fetch? ¿Qué se ejecuta
//primero, los datos o este último console.log?

const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url) 
.then((response) => response.json()) 
.then((data) => { 
orderPokemon2(data.results)
})

function orderPokemon(pokemons){
    pokemons.sort((a,b) => a.name.localeCompare(b.name)) //localeCompare hace una comparacion con Strings
    pokemons.forEach(element => {
        console.log(element.name)
    });
}

function orderPokemon2(pokemons){
    const newArray = pokemons.map((element) => element.name);
    newArray.sort()
    console.log(newArray)
}
