document.getElementById('scHeader').innerText = "Contar Palabras"

//<button id='btnAccion'>
//funcion anonima
document.getElementById('btnAccion').addEventListener('click',function(){
    
    let numWords = 0

    let text = document.getElementById('txtContenido').value
    numWords = text.split(' ').length

    document.getElementById('scResultados').innerText="Hay " + numWords + " Palabras"
})