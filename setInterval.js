// Es parecida a setTimeout pero la diferencia es que esta corre muchas veces de acuerdo al tiempo que le des

let i = 0;
let interval = setInterval(()=>{
    console.log(i++);
}, 2000);

// Cada 2s va a imprimir

setTimeout(()=>{
    clearInterval(interval);
}, 5000);

// Aqui lo vamos a parar depues de 5 segundos.