let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        noReciboDatos('no hay datos');
        // reciboDatos('datos');
    }, 5000);
});

promesa
    .then(texto => texto + ' Datos procesados')
    .then(texto => console.log(texto))
    .catch(problema => console.log('X ' + problema))
    .finally(() => console.log('Todo Listo!'))

console.log('Quiero ejecutar lo más pronto posible');