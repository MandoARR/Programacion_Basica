const promesa = new Promise((resolve, reject) => {
    const exito = Math.random() < 0.5; 

    setTimeout(() => {
        if (exito) {
            resolve(["Pizza", "Gritar Siuuu!", "Videojuegos"]);
        } else {
            reject(["Amierdica", "Tráfico", "programar sin Flat()"]);
        }
    }, 2000); 
});


//Math.random() < 0.5; // 50% de probabilidad de éxito
//Crear una promesa que espere 2 segundos para contestar 

//50% exito 50% error

//exito regresar una lista de cosas que te gustan
//error cosas que no te gustan
// 