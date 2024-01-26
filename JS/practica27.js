// Implementa una while verificando las galletas.
// Si quedan galletas come una galleta.
// Imprime cuántas galletas quedan.
// Al final imprime que has terminado.


let galletasEnLaCaja = 10; // Galletas iniciales
function quedanGalletas() { // Verdadero si quedan al menos una galleta
    return galletasEnLaCaja > 0;
}

function comerGalletas() {
    while (quedanGalletas() != false) {
        console.log("La cantidad de galletas es: " + galletasEnLaCaja);
        galletasEnLaCaja--;
    }
    console.log("La caja de galletas esta vacia D:")
}
comerGalletas();