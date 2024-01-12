//DOM



function saludar()
{
    //acceso al DOM 
    let elementoSection = document.getElementById('resultado')
    let txtNombre = document.getElementById('txtNombre')

    elementoSection.innerText = "Hola Enfermera !"
}


function llamarOrdenar()
{
    let elementosNumeros = document.getElementById('txtNumeros')
    //JSON.parse convierte texto a valores 
    let arreglo1 = JSON.parse(elementosNumeros.value)
    let resultado = ordenaArreglos(arreglo1)

    let elementos= document.getElementById('txtNombre')
    elementoSection.innerText = resultado
}
//console.log(document.getElementById('resultado'))

//console.log(elementoSection.innerText)