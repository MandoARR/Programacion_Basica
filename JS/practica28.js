/*let estaImprimiendo = false;
let contador = 0;

function laFotoEstaLista() {
    return Math.random() < 0.5 // 50% de probabilidad de éxito
}

function mandarImprimir() {
    estaImprimiendo = laFotoEstaLista();
    console.log("Imprimiendo foto...");
    return estaImprimiendo;
}

function recolectarFoto() {
    do{
        mandarImprimir();
        contador ++;
    }while(mandarImprimir = false);
    console.log("Foto Lista");
}

//mandarImprimir();
recolectarFoto();
console.log("Se imprimio: " + contador);
*/

// Implementa do while para saber si la foto está lista
// Si ya no está imprimiendo escribe “Foto Lista”
// Increment contador para saber cuántas veces verificaste
// Imprimir al final cuántas veces se verificó.


let estaImprimiendo = false;
let contador = 0;

function mandarImprimir() {
    estaImprimiendo = true;
    console.log("Imprimiendo foto...");
}

function laFotoEstaLista() {
    return Math.random() < 0.5; // 50% de probabilidad de éxito
}

function recolectarFoto() {
    do {
        laFotoEstaLista();
        contador ++;
    } while (laFotoEstaLista() != true);
    console.log("LA FOTO ESTA LISTA !")
    console.log("Se verifico: "+ contador + " si la foto estaba lista...")
}

mandarImprimir();
recolectarFoto();