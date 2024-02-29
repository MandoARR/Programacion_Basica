//Haz una tabla con los datos que vienen aquí, algo como el ejemplo, fíjate que al final del URL
//viene el nombre.

const url = "https://pokeapi.co/api/v2/pokemon/";

function pokeApi(){
     fetch(url).then((response) => response.json()).then(data => {
        const results = data.results

        
    }) 
}

pokeApi();