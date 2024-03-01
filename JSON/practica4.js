// ¿Qué pasa si ejecutas un console.log después del método fetch? ¿Qué se ejecuta
//  primero, los datos o este último console.log?
const url = "https://pokeapi.co/api/v2/pokemon/";

function pokeApi(){
     fetch(url).then((response) => response.json()).then(data => {
        //orderPokemon(data.results)
        console.log(data)
    }) 
}

console.log("Inicio") // Prueba para ver que que hace primero 
pokeApi();
console.log("Fin") // Prueba para ver que que hace primero.