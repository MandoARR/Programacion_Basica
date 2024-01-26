let estaImprimiendo = false;
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