/*Haz una tabla con los datos que vienen aquí, algo como el ejemplo, fíjate que al final del URL
viene el nombre.
TIPS:
➔ Puedes crear elementos dinámicos así: document.createElement("tr");
➔ Esta atributo “injecta” algo dentro del elemento .innerHTML
➔ Puedes encontrar elementos por su Id así: document.getElementById("id")
➔ Esta función lo agrega como hijo de un elemento .appendChild(element)*/

const url = "https://pokeapi.co/api/v2/pokemon/"

function thePromese() {
    fetch(url).then((response) => response.json()).then(data => {
        //console.log(data)
        listPoke2(data)
    })
}

function listPoke(pokemon) {
    const results = pokemon.results

    results.forEach(element => {
        const row = document.createElement("tr")
        const columnName = document.createElement("td")
        const columnUrl = document.createElement("td")

        columnName.innerHTML = element.name
        columnUrl.innerHTML = url + element.name + "/"
        row.appendChild(columnName)
        row.appendChild(columnUrl)

        document.getElementById('listPoke').appendChild(row)
    });
}

function listPoke2(pokemon) {
    const results = pokemon.results
    results.forEach(element => {
        const row = document.createElement("tr")

        row.innerHTML = `<td>${element.name}</td><td>${url}${element.name}/</td>`

        document.getElementById('listPoke').appendChild(row)
    })
}

thePromese()