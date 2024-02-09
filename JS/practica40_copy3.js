const pokemons = ["Geodude", "Paras", "Eevee", "Crobat", "Onyx", "Flygon", "Zeraora"];

function moverPokemons(array) {
    if (array.length < 4) { 
        console.log("");
        return array;
    }

    let ultimosDos = array.splice(-2);
    let primerosDos = array.splice(0, 2);

    array.unshift(...ultimosDos);
    array.push(...primerosDos);
    return array;
}

let resultado = moverPokemons(pokemons);
console.log(resultado);