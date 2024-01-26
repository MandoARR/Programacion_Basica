let galletasEnLaCaja = 10; 

function quedanGalletas() {
    return galletasEnLaCaja 
}

function comerGalletas() {
    galletasEnLaCaja --;
    return galletasEnLaCaja;
}


while(quedanGalletas != true){
    comerGalletas();
    console.log("La cantidad de galletas es: " + galletasEnLaCaja)
}