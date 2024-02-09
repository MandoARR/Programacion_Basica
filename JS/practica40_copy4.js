const pokemons = ["Geodude", "Paras", "Eevee", "Crobat", "Onyx", "Flygon", "Zeraora"];

let ultimosDos = pokemons.splice(pokemons.length - 2);

let primerosDos = pokemons.splice(0, 2);

let pokemons2 = ultimosDos;
for (let i = 0; i < pokemons.length; i++) {
    pokemons2.push(pokemons[i]);
}
for (let i = 0; i < primerosDos.length; i++) {
    pokemons2.push(primerosDos[i]);
}

console.log(pokemons2);