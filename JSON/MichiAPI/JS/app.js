const url = "https://catfact.ninja/facts"

const cardTemple = document.getElementById("scTemplate").innerHTML

fetch(url).then((response) => response.json())
.then((response) => {
    response.data.array.forEach(element => {
        document.getElementById("content").innerHTML = fact.fact
    })
    //document.getElementById('content')
})