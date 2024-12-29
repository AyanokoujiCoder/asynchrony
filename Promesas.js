let promesa = new Promise((seCumple, noSeCumple) => {
    seCumple('Muy bien!');
});

promesa
    .then(texto => console.log(texto))
    .catch(problema => console.log(problema));

// Aqui no cumple:

// let promesa = new Promise((seCumple, noSeCumple) => {
//     noSeCumple('Algo salió mal!');
// });
    
// promesa
//     .then(texto => console.log(texto))
//     .catch(problema => console.log(problema));

// Aqui hay que esperar 5 segundos para recibir los datos

// let promesa = new Promise((reciboDatos, noReciboDatos) => {
//     setTimeout(()=>{
//         reciboDatos('datos');
//     }, 5000);
// });

// promesa
//     .then(texto => console.log(texto))
//     .catch(problema => console.log('X' + problema));

// console.log('Quiero ejecutar lo más pronto posible');