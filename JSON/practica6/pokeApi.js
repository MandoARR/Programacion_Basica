//Haz una tabla con los datos que vienen aquí, algo como el ejemplo, fíjate que al final del URL
//viene el nombre.
const url = "https://pokeapi.co/api/v2/pokemon/";

function pokeApi(){
     fetch(url).then((response) => response.json()).then(data => {
        //console.log(data)
        tabla(data)
    }) 
}

function tabla(list){
    const results = list.results
    const name_pokemon = results.map((element) => (element.name).toUpperCase()) 
    const url_pokemon = results.map((element) => element.url)

    document.getElementById('pokemons').innerHTML = "Pokémon: " + name_pokemon
    document.getElementById('urls').innerHTML = "URL: " + url_pokemon
}

pokeApi();