// ¿Qué pasa si ejecutas un console.log después del método fetch? ¿Qué se ejecuta
//  primero, los datos o este último console.log?
const url = "https://pokeapi.co/api/v2/pokemon/"; 

fetch(url) 
.then(console.log(data)) 

