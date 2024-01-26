let tipoUsuario = "estudiante";
let tarifa = 1;
let kmRecorrido = 10;

function calcularTarifa(){
    let tarifaTotal = (tarifa*kmRecorrido)
    console.log("La tarifa a pagar es: " + tarifaTotal)
}

switch (tipoUsuario) {
    case 'estudiante':
        tarifa = 0.5;
        calcularTarifa();
        break;
    case 'profesor':
        tarifa = 0.8;
        calcularTarifa();
        break;
    default:
        calcularTarifa();
        break;
}