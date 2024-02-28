//El fetch ponlo en una función y mándalo llamar.
const url = "https://pokeapi.co/api/v2/pokemon/"; 
    
function pokeApi(response){
    fetch(url).then((response) => response.json());
    return response;
}

console.log(pokeApi(response))