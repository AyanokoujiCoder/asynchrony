// Azucar sintactica o async await

let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() =>{ 
        reciboDatos('datos1');
     }, 5000);
});

// El problema de estas promesas al hacerlo de esta manera 
// es que enpesamos anidar muchas funciones y es un poco dificil 
// de leer, async await hace que esto sea mas facil de leer 

// promesa.then(()=> {}).then(()=> {}).then(()=> {})

// let resultado = await promesa;
// console.log(resultado.toUpperCase());

// await significaa esperar y el unico requisito para utilizar esta 
// palabra es de que este codigo debe estar dentro de una funcion y tenemos 
// que indicar que esa funcion es asincrona.

async function asincrona() {
    let resultado = await promesa;
    console.log(resultado.toUpperCase());
}

asincrona();

// Cuando trabajes en puros proyectos reales la mayoria de tu codigo va a estar 
// dentro de una funcion de todas maneras y esto va a ser mucho mas facil leer tu codigo.

// Otra opcion de llamar a tu funcion inmediatamente

// (async function asincrona() {
//     let resultado = await promesa;
//     console.log(resultado.toUpperCase());
// })();