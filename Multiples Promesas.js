let promesa1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => { reciboDatos('datos1'); }, 5000);
});

let promesa2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => { reciboDatos('datos2'); }, 2000);
});

Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2]) => {
        console.log(resultado1);
        return resultado2;
    })
    .then(resultado2 => {
        console.log(resultado2.toUpperCase());
    });


    // Promise.all: Este método toma un array de promesas y devuelve una nueva 
    // promesa que se resuelve cuando todas las promesas del array se han 
    // resuelto o se rechaza si alguna de las promesas se rechaza.

// Nos permite pasar una lista de promisas porque hay situaciones unicas 
// en donde tenemos que realizar algo como un resultado pero este resultado 
// puede ser asincrono por ejemplo imaginate que estos son pedidos al servidor 
// y luego no sabes cuanto tiempo se va a demorar cada pedido.

// const promesa1 = new Promise((resolve) => {
// 	setTimeout(() => { resolve('Hola'); }, 1000);
// });
// const promesa2 = new Promise((resolve) => {
// 	setTimeout(() => { resolve('Mundo') }, 2000);
// });

// Promise.all([promesa1, promesa2])
//     .then(([result1, result2]) => {
//     console.log(result1 + ' ' + result2);
// });