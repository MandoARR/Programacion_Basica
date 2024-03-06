//Haz una tabla con los datos que vienen aquí, algo como el ejemplo, fíjate que al final del URL
//viene el nombre.
const url = "https://pokeapi.co/api/v2/pokemon/"

function pokeApi() {
    fetch(url).then((response) => response.json()).then(data => {
        //console.log(data)
        tabla2(data)
    })
}

function tabla(list) { //Utilizando los tips del documento en Moodle
    const results = list.results


    results.forEach(element => {
        const row = document.createElement("tr")
        const columnName = document.createElement("td")
        const columnUrl = document.createElement("td")

        columnName.innerHTML = element.name
        row.appendChild(columnName)

        columnUrl.innerHTML = url + element.name + "/"
        row.appendChild(columnUrl)


        document.getElementById('pokemons').appendChild(row)
    });
}

function tabla2(list) { //Nuevo metodo mostrado en clase
    const results = list.results

    results.forEach(element => {
        const row = document.createElement("tr")
        row.innerHTML =
            `<td>${element.name}</td>
            <td>${url}${element.name}/</td>`

        document.getElementById('pokemons').appendChild(row)
    });
}

pokeApi();

//➔ Puedes crear elementos dinámicos así: document.createElement("tr");
//➔ Esta atributo “injecta” algo dentro del elemento .innerHTML
//➔ Puedes encontrar elementos por su Id así: document.getElementById("id")
//➔ Esta función lo agrega como hijo de un elemento .appendChild(element)