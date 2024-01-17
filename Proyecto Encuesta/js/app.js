const ID_CONTENEDOR_RESPUESTA = 'scResultados'


function guardarDatos(){

    limpiarRespuesta()

    let vNombre = validaNombre()
    let vCorreo = validaCorreo()
    let vGenero = validaGenero()

    if(vNombre && vCorreo && vGenero){
        reportaExito("Guardado!")
    }
}

function validaNombre(){
    
    return true
}

function validaCorreo(){
    

    return true
}

function validaGenero(){
    

    return true
}

function limpiarRespuesta(){
    
}

function reportaError(mensaje) {
    
    
    /*let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.setAttribute("class", "")//limpia las clases anteriores
    contenedorRespuesta.classList.add('error')
    */
}

function reportaExito(mensaje){
    
}

function obtenerValor(input){
    
}

function actualizaSatisfaccion(){
    let elementoScSatisfaccion = document.getElementById('scSatisfaccion')
    elementoScSatisfaccion.innerText = "Algo"
   
}
