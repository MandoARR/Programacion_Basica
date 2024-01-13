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
    //JSON.parse convierte texto a valores "[1,2,3]" = [1,2,3]
    let arreglo1 = JSON.parse(elementosNumeros.value)
    let resultado = ordenaArreglos(arreglo1)

    let elementoSection= document.getElementById('resultado')
    elementoSection.innerText = resultado
}