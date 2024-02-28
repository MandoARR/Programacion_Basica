const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probabilidad = Math.random() < 0.5;
            if (probabilidad) {
                resolve(["Pizza", "Música", "Videojuegos"]);
            } else {
                reject(["Aguacate", "Tráfico", "Facturas"]);
            }
        }, 2000);
    });
};

myPromise()
    .then((list) => {
        document.getElementById('resultado').innerHTML = "Cosas que me gustan: " + list.join(", ");
    })
    .catch((list) => {
        document.getElementById('resultado').innerHTML = "Cosas que NO me gustan: " + list.join(", ");
    });



//Math.random() < 0.5; // 50% de probabilidad de éxito
//Crear una promesa que espere 2 segundos para contestar 

//50% exito 50% error

//exito regresar una lista de cosas que te gustan
//error cosas que no te gustan
// https://catfact.ninja/facts
// hechos y el length de cada hecho