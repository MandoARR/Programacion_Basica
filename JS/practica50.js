/*const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url).then((response) => response.json()).then((data) => { 
    console.log(data); 
});
*/
//Intenten la respuesta del fetch(url) (¿Comprensible?)
const url = "https://pokeapi.co/api/v2/pokemon/"; 
fetch(url).then((response) => {
    console.log(response)
    return response.json()})
    .then((data) => { 
        console.log(data); 
    });

