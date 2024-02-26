document.getElementById('scHeader').innerText ="Encuentra la Palabra mas grande"

document.getElementById('btnAccion').addEventListener('click', () =>{
    
    let words = [] 
    let numWords = 0
    let text = document.getElementById('txtContenido').value
    
    //Se separan las palabras 
    numWords = text.split(" ").forEach(element => {
        if (words.length === element.length){ //pendiente resolver como ir separando los caracteres 
            words += (" " + element)
        }

        if (words.length < element.length){
            words = element
        }
        
    });

    //En caso de tener mas 1 palabra grande se intenta separarlas con " "
    //let bigWord = words.split(" ")
    document.getElementById('scResultados').innerText = "La palabra o palabras mas grande es: " + words
})
