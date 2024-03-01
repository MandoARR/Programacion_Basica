// Crea un método que reciba el nombre de un pokemon y traiga sus datos.
const url = "https://pokeapi.co/api/v2/pokemon/";
let pokemon = "garchomp"

function pokeApi(){
     fetch(url+pokemon).then((response) => response.json()).then(data => {
        console.log(data)
    }) 
}

pokeApi();